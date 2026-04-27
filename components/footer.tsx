import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-western-purple text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Office of the Registrar</h3>
            <p className="text-sm text-white/80">
              Supporting students with registration, records, and academic services at Western University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#topics" className="text-white/80 transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#faculties" className="text-white/80 transition-colors hover:text-white">
                  Faculties
                </Link>
              </li>
              <li>
                <a
                  href="https://registrar.uwo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Registrar Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.uwo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Western Home
                </a>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Student Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://studentservices.uwo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Student Services
                </a>
              </li>
              <li>
                <a
                  href="https://westerncalendar.uwo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Academic Calendar
                </a>
              </li>
              <li>
                <a
                  href="https://registrar.uwo.ca/academics/transcripts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Transcripts
                </a>
              </li>
              <li>
                <a
                  href="https://registrar.uwo.ca/student_finances/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Financial Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Western University</li>
              <li>London, ON N6A 3K7</li>
              <li>Canada</li>
              <li className="pt-2">
                <a
                  href="tel:519-661-2100"
                  className="transition-colors hover:text-white"
                >
                  Tel: 519-661-2100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-white/20 pt-8 text-center text-sm text-white/80">
          <p>© {currentYear} Western University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
