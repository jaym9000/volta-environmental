import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quote for pet waste removal in New Brunswick. Call us or fill out our form. Same-week service available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-volta-blue pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-volta-blue-200 text-sm font-semibold uppercase tracking-wider mb-2">
            Get In Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-volta-blue-100 text-lg mt-4 max-w-2xl">
            Ready for a cleaner yard? Reach out for a free, no-obligation quote.
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-volta-black mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-volta-black mb-6">
                Contact Information
              </h2>
              <div className="bg-volta-gray-50 rounded-2xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-volta-blue-light flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-volta-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-volta-black mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-volta-gray-500 hover:text-volta-blue transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-volta-blue-light flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-volta-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-volta-black mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-volta-gray-500 hover:text-volta-blue transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-volta-blue-light flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-volta-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-volta-black mb-1">
                      Service Area
                    </h3>
                    <p className="text-volta-gray-500">{COMPANY.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-volta-blue-light flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-volta-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-volta-black mb-1">
                      Business Hours
                    </h3>
                    <p className="text-volta-gray-500">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500000!2d-66.5!3d46.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca3f18b1ef1c4ad%3A0x3e1a3b1b1b1b1b1b!2sNew%20Brunswick!5e0!3m2!1sen!2sca!4v1709000000000!5m2!1sen!2sca"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Volta Environmental Services - New Brunswick"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
