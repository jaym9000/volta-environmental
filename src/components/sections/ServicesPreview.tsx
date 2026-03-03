import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Residential Pet Waste Removal",
    description:
      "Regular yard cleanups for homeowners. Weekly, bi-weekly, or monthly plans to keep your yard spotless.",
    image: "/images/dog-playing.jpg",
    link: "/services/",
    cta: "View Plans",
  },
  {
    title: "Commercial Property Cleanups",
    description:
      "Professional grounds maintenance for condos, apartments, and commercial properties in your area.",
    image: "/images/commercial-property.jpg",
    link: "/services/",
    cta: "Get a Quote",
  },
  {
    title: "One-Time Deep Cleanups",
    description:
      "Spring cleanups, move-in/move-out preparation, or neglected yard restoration. One call does it all.",
    image: "/images/clean-yard.jpg",
    link: "/services/",
    cta: "Book Now",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-volta-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="From routine pet waste removal to commercial property maintenance, we've got you covered."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-volta-black mb-2">
                  {service.title}
                </h3>
                <p className="text-volta-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-volta-blue font-semibold text-sm group-hover:gap-2 transition-all">
                  {service.cta} <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
