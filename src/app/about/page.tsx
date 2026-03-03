import type { Metadata } from "next";
import Image from "next/image";
import { iconMap } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { MISSION_STATEMENT, VALUES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Volta Environmental Services — a locally owned environmental services company in New Brunswick. Eco-friendly pet waste removal and yard cleanup.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-volta-blue pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-volta-blue-200 text-sm font-semibold uppercase tracking-wider mb-2">
            Who We Are
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            About Volta Environmental
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-sm uppercase tracking-wider text-volta-blue font-semibold mb-2">
                Our Mission
              </h2>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-volta-black mb-6">
                Clean Spaces Create Healthy Lives
              </h3>
              <p className="text-volta-gray-500 text-lg leading-relaxed">
                {MISSION_STATEMENT}
              </p>
            </div>
            <div>
              <Image
                src="/images/family-dog.jpg"
                alt="Family enjoying a clean yard with their dog"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-volta-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Our Story"
              subtitle="Founded right here in New Brunswick."
            />
            <div className="space-y-4 text-volta-gray-500 text-lg leading-relaxed">
              <p>
                Volta Environmental Services was founded with a simple belief:
                every family deserves a clean, safe outdoor space. As a local
                business, we understand our community and the unique
                needs of New Brunswick homeowners.
              </p>
              <p>
                What started as a passion for keeping neighbourhoods clean has
                grown into a full-service environmental company. From routine pet
                waste removal to commercial property maintenance and light junk
                hauling, we&apos;re building something our community can rely on.
              </p>
              <p>
                Our vision goes beyond just cleaning yards. We&apos;re building
                the most trusted environmental services provider
                — one clean yard at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-volta-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-volta-blue-light flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon size={28} className="text-volta-blue" />}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-volta-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-volta-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28 bg-volta-blue-light">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/logo.png"
            alt="Volta Environmental Services"
            width={1087}
            height={880}
            className="h-24 w-auto mx-auto mb-8"
          />
          <h2 className="font-heading text-3xl font-bold text-volta-black mb-4">
            The Volta Vision
          </h2>
          <p className="text-volta-gray-600 text-lg leading-relaxed">
            Starting with pet waste removal and yard cleanups, our vision is to
            become the most trusted environmental services provider.
            We&apos;re committed to growing responsibly, reinvesting in our
            community, and delivering exceptional service at every step.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
