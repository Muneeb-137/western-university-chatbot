"use client";

import { useState } from "react";
import Link from "next/link";

type FormData = {
  fullName: string;
  date: string;
  studentNumber: string;
  westernId: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  date: "",
  studentNumber: "",
  westernId: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function HelpPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (warning) {
      setWarning("");
    }
  };

  const allFieldsFilled = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!allFieldsFilled) {
      setWarning("All fields must be completed before submitting the request.");
      setSuccess(false);
      return;
    }

    try {
      setIsSubmitting(true);

      /*
        Replace this URL with your own Formspree endpoint.
        Example: https://formspree.io/f/abcdwxyz
      */
      const response = await fetch("https://formspree.io/f/xjgjdwlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      setWarning("");
      setFormData(initialFormData);
    } catch (error) {
      setWarning("Something went wrong while submitting. Please try again.");
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
        <Link
          href="/"
          className="text-sm font-semibold text-purple-700 hover:text-purple-900"
        >
          ← Back to Home
        </Link>

        <p className="mt-6 text-sm font-semibold text-purple-700">
          Western Chatbot
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Help & Assistance
        </h1>

        <p className="mt-3 text-slate-600">
          Submit your information and question below. A support request will be
          recorded and sent for review.
        </p>

        {warning && (
          <div className="mt-6 rounded-lg border border-yellow-300 bg-yellow-100 px-4 py-3 text-sm font-medium text-yellow-900">
            {warning}
          </div>
        )}

        {success && (
          <div className="mt-6 rounded-lg border border-green-300 bg-green-100 px-4 py-3 text-sm font-medium text-green-900">
            Your response has been recorded successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Full Name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Date
              </label>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Western Student Number
              </label>
              <input
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Student Number"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Western User ID
              </label>
              <input
                name="westernId"
                value={formData.westernId}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Western User ID"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="email@uwo.ca"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Subject
            </label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border px-3 py-2"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Question
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 min-h-36 w-full rounded-lg border px-3 py-2"
              placeholder="Comments or concerns..."
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-purple-800 px-5 py-3 font-semibold text-white hover:bg-purple-900 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>

            <Link
              href="/"
              className="rounded-lg border border-purple-800 px-5 py-3 text-center font-semibold text-purple-800 hover:bg-purple-50"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}