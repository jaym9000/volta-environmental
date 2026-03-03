import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { RESIDENTIAL_PRICING, COMMERCIAL_PRICING } from "@/lib/constants";
import { Dog, Building2, Sparkles, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Pet waste removal & yard cleanup services in New Brunswick. Residential plans from $25/visit, commercial packages from $80/mo. One-time cleanups and light junk removal available.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-volta-blue pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-volta-blue-200 text-sm font-semibold uppercase tracking-wider mb-2">
            What We Offer
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Our Services &amp; Pricing
          </h1>
          <p className="text-volta-blue-100 text-lg mt-4 max-w-2xl">
            Transparent pricing, no contracts, no hidden fees. Choose the plan
            that works best for you.
          </p>
        </div>
      </section>

      {/* Residential Pet Waste Removal */}
      <section id="residential" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Dog size={28} className="text-volta-blue" />
            <p className="text-volta-blue font-semibold text-sm uppercase tracking-wider">
              Residential
            </p>
          </div>
          <SectionHeading
            title="Pet Waste Removal"
            subtitle="Regular yard cleanups so your family and pets can enjoy a clean, safe outdoor space."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              {/* Pricing Table */}
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-volta-blue text-white">
                      <th className="text-left px-6 py-4 font-heading font-bold rounded-tl-xl">
                        Plan
                      </th>
                      <th className="text-center px-6 py-4 font-heading font-bold">
                        1–2 Dogs
                      </th>
                      <th className="text-center px-6 py-4 font-heading font-bold rounded-tr-xl">
                        3–4 Dogs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {RESIDENTIAL_PRICING.map((row, i) => (
                      <tr
                        key={row.plan}
                        className={`border-b border-volta-gray-100 ${
                          row.popular ? "bg-volta-blue-light" : i % 2 === 0 ? "bg-white" : "bg-volta-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 font-semibold text-volta-black">
                          <span className="flex items-center gap-2">
                            {row.plan}
                            {row.popular && (
                              <span className="text-xs bg-volta-blue text-white px-2 py-0.5 rounded-full font-medium">
                                Most Popular
                              </span>
                            )}
                          </span>
                        </td>
                        <td className="text-center px-6 py-4 text-volta-black font-semibold text-lg">
                          {row.price12Dogs}
                          <span className="text-volta-gray-400 text-sm font-normal">
                            /visit
                          </span>
                        </td>
                        <td className="text-center px-6 py-4 text-volta-black font-semibold text-lg">
                          {row.price34Dogs}
                          <span className="text-volta-gray-400 text-sm font-normal">
                            /visit
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              <div className="mt-6 space-y-2 text-sm text-volta-gray-500">
                <p>
                  <strong className="text-volta-black">First Cleanup Fee:</strong>{" "}
                  $50 – $100 (one-time fee based on yard condition)
                </p>
                <p>
                  <strong className="text-volta-black">Note:</strong> Pricing may
                  vary based on yard size. Contact us for a custom quote.
                </p>
                <p>
                  <strong className="text-volta-black">Property Size:</strong>{" "}
                  Residential pricing applies to properties up to 10,000 sq ft. Larger properties require a custom quote.
                </p>
              </div>

              <div className="mt-8">
                <Button href="/contact/" size="lg">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Side Image */}
            <div className="hidden lg:block">
              <Image
                src="/images/dog-portrait.jpg"
                alt="Happy dog enjoying a clean yard"
                width={400}
                height={500}
                className="rounded-2xl object-cover w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-volta-gray-200" />
      </div>

      {/* Commercial Property Cleanups */}
      <section id="commercial" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Building2 size={28} className="text-volta-blue" />
            <p className="text-volta-blue font-semibold text-sm uppercase tracking-wider">
              Commercial
            </p>
          </div>
          <SectionHeading
            title="Commercial Property Cleanups"
            subtitle="Professional grounds maintenance for condos, apartments, and commercial properties."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMERCIAL_PRICING.map((tier) => (
              <div
                key={tier.size}
                className="bg-white rounded-xl p-6 shadow-sm border border-volta-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="font-heading font-bold text-lg text-volta-black mb-1">
                  {tier.size}
                </h3>
                <p className="text-volta-gray-400 text-sm mb-4">{tier.units}</p>
                <p className="text-3xl font-bold text-volta-blue mb-6">
                  {tier.price}
                </p>
                <Button
                  href="/contact/"
                  variant={tier.size === "Custom" ? "secondary" : "primary"}
                  size="sm"
                  className="w-full"
                >
                  {tier.size === "Custom" ? "Call for Quote" : "Get Started"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-volta-gray-200" />
      </div>

      {/* One-Time Deep Cleanups */}
      <section id="one-time" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={28} className="text-volta-blue" />
                <p className="text-volta-blue font-semibold text-sm uppercase tracking-wider">
                  One-Time Service
                </p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-volta-black mb-4">
                One-Time Deep Cleanups
              </h2>
              <p className="text-volta-gray-500 text-lg leading-relaxed mb-6">
                Whether it&apos;s a spring cleanup, move-in/move-out preparation,
                or restoring a neglected yard — we&apos;ll handle it all in one
                visit.
              </p>
              <ul className="space-y-3 text-volta-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Spring and fall yard cleanups
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Move-in / move-out property preparation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Neglected yard restoration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Pricing based on yard size and condition
                </li>
              </ul>
              <Button href="/contact/">Book a Deep Cleanup</Button>
            </div>
            <div>
              <Image
                src="/images/clean-yard.jpg"
                alt="Clean, pristine green yard"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4">
        <hr className="border-volta-gray-200" />
      </div>

      {/* Light Junk Removal */}
      <section id="junk-removal" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/junk-removal.jpg"
                alt="Light junk removal service"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-2">
                <Truck size={28} className="text-volta-blue" />
                <p className="text-volta-blue font-semibold text-sm uppercase tracking-wider">
                  Junk Removal
                </p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-volta-black mb-4">
                Light Junk Removal
              </h2>
              <p className="text-volta-gray-500 text-lg leading-relaxed mb-6">
                Need to get rid of old furniture, yard waste, or other small items?
                We offer convenient light junk removal services in your area.
              </p>
              <ul className="space-y-3 text-volta-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Small furniture and appliance removal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Yard waste and debris cleanup
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  General light hauling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-volta-green font-bold mt-0.5">&#10003;</span>
                  Free estimates — no obligation
                </li>
              </ul>
              <Button href="/contact/">Get a Junk Removal Quote</Button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
