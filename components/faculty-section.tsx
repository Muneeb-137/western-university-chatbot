"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, ImageIcon, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Department {
  name: string
  logoPath?: string
}

interface Faculty {
  name: string
  description: string
  thumbnail: string
  departments: Department[]
}

const faculties: Faculty[] = [
  {
    name: "Faculty of Science",
    description:
      "Explore programs in mathematics, biology, chemistry, physics, computer science, and more.",
    thumbnail: "/thumbnails/western-science.png",
    departments: [
      { name: "Applied Mathematics" },
      { name: "Biology" },
      { name: "Chemistry" },
      { name: "Computer Science" },
      { name: "Earth Sciences" },
      { name: "Mathematics" },
      { name: "Physics and Astronomy" },
      { name: "Statistical and Actuarial Sciences" },
    ],
  },
  {
    name: "Arts & Humanities",
    description:
      "Discover programs in literature, history, philosophy, languages, and the visual arts.",
    thumbnail: "/thumbnails/western-arts-humanities.png",
    departments: [
      { name: "English and Writing Studies" },
      { name: "French Studies" },
      { name: "History" },
      { name: "Philosophy" },
      { name: "Visual Arts" },
      { name: "Languages and Cultures" },
      { name: "Classical Studies" },
      { name: "Comparative Literature" },
    ],
  },
  {
    name: "Education",
    description:
      "Programs for aspiring educators including pre-service, graduate, and professional studies.",
    thumbnail: "/thumbnails/western-education.png",
    departments: [
      { name: "Pre-Service Education" },
      { name: "Graduate Education" },
      { name: "Applied Professional Studies" },
    ],
  },
  {
    name: "Health Sciences",
    description:
      "Programs in nursing, kinesiology, occupational therapy, physical therapy, and more.",
    thumbnail: "/thumbnails/western-health-sciences.png",
    departments: [
      { name: "Communication Sciences and Disorders" },
      { name: "Health Studies" },
      { name: "Kinesiology" },
      { name: "Nursing" },
      { name: "Occupational Therapy" },
      { name: "Physical Therapy" },
    ],
  },
  {
    name: "Social Science",
    description:
      "Study anthropology, economics, geography, political science, psychology, sociology, and more.",
    thumbnail: "/thumbnails/western-social-science.png",
    departments: [
      { name: "Anthropology" },
      { name: "Economics" },
      { name: "Geography and Environment" },
      { name: "History (Joint with Arts & Humanities)" },
      { name: "Indigenous Studies" },
      { name: "Political Science" },
      { name: "Psychology" },
      { name: "Sociology" },
      { name: "Women's Studies and Feminist Research" },
    ],
  },
  {
    name: "Information & Media Studies",
    description:
      "Programs in library science, media studies, and journalism.",
    thumbnail: "/thumbnails/western-fims.png",
    departments: [
      { name: "Library and Information Science" },
      { name: "Media and Information Studies" },
      { name: "Journalism" },
    ],
  },
  {
    name: "Don Wright Faculty of Music",
    description:
      "Programs in music education, performance, theory, composition, and popular music studies.",
    thumbnail: "/thumbnails/western-music.jpg",
    departments: [
      { name: "Music Education" },
      { name: "Music Performance" },
      { name: "Music Theory and Composition" },
      { name: "Music History" },
      { name: "Popular Music Studies" },
    ],
  },
]

export function FacultySection() {
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null)

  const activeFaculty = faculties.find((f) => f.name === selectedFaculty)

  return (
    <section id="faculties" className="bg-secondary py-20 border-b-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Faculty Inquiries
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            We can provide general inquiries for the following faculties. Select
            a faculty to view its departments.
          </p>
        </div>

        {/* Faculty cards with thumbnails */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faculties.map((faculty) => {
            const isSelected = selectedFaculty === faculty.name
            return (
              <button
                key={faculty.name}
                type="button"
                onClick={() =>
                  setSelectedFaculty(isSelected ? null : faculty.name)
                }
                className={cn(
                  "group flex flex-col overflow-hidden rounded-xl border text-left transition-all hover:shadow-lg hover:shadow-western-purple/10",
                  isSelected
                    ? "border-western-purple ring-2 ring-western-purple/30 shadow-lg shadow-western-purple/10"
                    : "border-border hover:border-western-purple/30"
                )}
              >
                {/* Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden bg-western-purple">
                  <Image
                    src={faculty.thumbnail || "/placeholder.svg"}
                    alt={faculty.name}
                    fill
                    className="object-cover opacity-70 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={cn(
                    "absolute inset-0 transition-colors",
                    isSelected ? "bg-western-purple/30" : "bg-western-purple/40"
                  )} />
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                    <Building2 className="h-5 w-5" />
                  </div>
                  {isSelected && (
                    <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-western-purple">
                      Selected
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col bg-card p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{faculty.name}</h3>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isSelected ? "rotate-90 text-western-purple" : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {faculty.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Departments panel */}
        {activeFaculty && (
          <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-western-purple text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {activeFaculty.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {activeFaculty.departments.length} Departments
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeFaculty.departments.map((dept) => (
                  <div
                    key={dept.name}
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-colors hover:border-western-purple/20 hover:shadow-sm"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-western-purple/10">
                      {dept.logoPath ? (
                        <img
                          src={dept.logoPath || "/placeholder.svg"}
                          alt={`${dept.name} logo`}
                          className="h-10 w-10 object-contain"
                        />
                      ) : (
                        <ImageIcon className="h-6 w-6 text-western-purple" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        {dept.name}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">
                        {activeFaculty.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                To add a department logo, set the{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  logoPath
                </code>{" "}
                property for that department (e.g.{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                  {`"/logos/computer-science.png"`}
                </code>
                ).
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
