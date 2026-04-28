from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import json
import numpy as np
import os


app = Flask(__name__)
CORS(app)


# ---------------------------------------------------------
# 1. Load knowledge base
# ---------------------------------------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KNOWLEDGE_BASE_PATH = os.path.join(BASE_DIR, "knowledge_base.json")

with open(KNOWLEDGE_BASE_PATH, "r", encoding="utf-8") as file:
    knowledge_base = json.load(file)


# ---------------------------------------------------------
# 2. Load AI embedding model
# ---------------------------------------------------------
# This model converts text into numerical vectors.
# Similar meanings will have similar vectors.

model = SentenceTransformer("all-MiniLM-L6-v2")


# ---------------------------------------------------------
# 3. Prepare questions and embeddings
# ---------------------------------------------------------

questions = [item["question"] for item in knowledge_base]

# Convert all saved questions into embeddings once when server starts.
question_embeddings = model.encode(questions)


# ---------------------------------------------------------
# 4. Helper function to find best answer
# ---------------------------------------------------------

def find_best_answer(user_message):
    """
    Finds the knowledge-base question that is closest in meaning
    to the user's message.
    """

    # Convert user message into an embedding.
    user_embedding = model.encode([user_message])

    # Compare user's embedding with all stored question embeddings.
    similarities = cosine_similarity(user_embedding, question_embeddings)

    # Get index of highest similarity score.
    best_match_index = int(np.argmax(similarities))

    # Get best score.
    best_score = float(similarities[0][best_match_index])

    # Get the matching knowledge-base item.
    best_match = knowledge_base[best_match_index]

    return best_match, best_score


# ---------------------------------------------------------
# 5. Test route
# ---------------------------------------------------------

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Western University AI chatbot backend is running.",
        "status": "success"
    })


# ---------------------------------------------------------
# 6. Main chatbot route
# ---------------------------------------------------------

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()

    if not data or "message" not in data:
        return jsonify({
            "response": "Please send a valid message."
        }), 400

    user_message = data["message"].strip()

    if user_message == "":
        return jsonify({
            "response": "Please type a question so I can help you."
        })

    best_match, confidence = find_best_answer(user_message)

    # Confidence threshold:
    # If similarity is too low, return fallback.
    if confidence < 0.35:
        fallback = next(
            item for item in knowledge_base
            if item["category"] == "fallback"
        )

        return jsonify({
            "category": "fallback",
            "confidence": round(confidence, 3),
            "response": fallback["answer"]
        })

    return jsonify({
        "category": best_match["category"],
        "matched_question": best_match["question"],
        "confidence": round(confidence, 3),
        "response": best_match["answer"]
    })


# ---------------------------------------------------------
# 7. Run backend
# ---------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True, port=5000)