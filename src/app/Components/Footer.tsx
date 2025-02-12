import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl lg:ml-20 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Logo and Social Links */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="~text-xl/lg font-medium">
              My Website
            </Link>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-3 gap-8">
            {/* First Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium">Topic</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium">Topic</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-medium">Topic</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

