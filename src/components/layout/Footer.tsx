import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-volta-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Volta Environmental Services"
                width={180}
                height={68}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-volta-gray-300 text-sm leading-relaxed">
              {COMPANY.motto}. Professional pet waste removal and yard cleanup
              services in New Brunswick.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-volta-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={22} />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-volta-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href={COMPANY.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-volta-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/"
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/"
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  Residential Pet Waste Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/"
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  Commercial Cleanups
                </Link>
              </li>
              <li>
                <Link
                  href="/services/"
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  One-Time Deep Cleanups
                </Link>
              </li>
              <li>
                <Link
                  href="/services/"
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  Light Junk Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-volta-blue mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-volta-blue mt-0.5 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-volta-gray-300 hover:text-white transition-colors text-sm"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-volta-blue mt-0.5 shrink-0" />
                <span className="text-volta-gray-300 text-sm">
                  {COMPANY.serviceArea}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-volta-blue mt-0.5 shrink-0" />
                <span className="text-volta-gray-300 text-sm">
                  {COMPANY.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-volta-blue-dark">
          <p className="text-center text-volta-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
