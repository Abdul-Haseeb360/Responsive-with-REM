"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container ">
      <div className="mx-auto flex lg:ml-20 pt-16 max-w-7xl items-center justify-between">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="~/md:~text-base/xl lg:~lg:~text-lg/2xl font-medium "
          >
            My Website
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="~/md:~text-base/xl lg:~lg:~text-lg/xl font-medium text-gray-900 hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="~/md:~text-base/xl lg:~lg:~text-lg/xl font-medium text-gray-900 hover:text-gray-600"
          >
            About
          </Link>
          <Link
            href="/services"
            className="~/md:~text-base/xl lg:~lg:~text-lg/xl font-medium text-gray-900 hover:text-gray-600"
          >
            Services
          </Link>
          <Button className=" rounded-lg bg-black ~px-4/8 ~py-2/8 ~/md:~text-base/xl lg:~lg:~text-lg/xl hover:bg-gray-800">
            Button
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-6 flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-lg font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Button
                  className="mt-2 w-full rounded-lg bg-black hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  Button
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
