"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Volta Environmental Services"
              width={1087}
              height={880}
              className="h-14 w-auto sm:h-16"
              priority
            />
            <span className="font-heading font-bold text-base sm:text-lg text-volta-black leading-tight">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-volta-gray-600 hover:text-volta-blue font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="bg-volta-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-volta-blue-hover transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-volta-black"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-volta-gray-200">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-volta-gray-600 hover:text-volta-blue font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-volta-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-volta-blue-hover transition-colors mt-4"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
