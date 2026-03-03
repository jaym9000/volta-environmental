import { MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServiceArea() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Proudly Serving Our Community"
          subtitle="We service neighbourhoods across the region. Contact us to confirm coverage in your area."
        />
        <div className="bg-volta-blue-light rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-volta-blue flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-volta-black">
                Our Service Area
              </h3>
            </div>
            <p className="text-volta-gray-500 leading-relaxed mb-6">
              Volta
              Environmental Services is committed to keeping your property
              clean. Not sure if we service your area? Contact us and we&apos;ll
              let you know!
            </p>
            <Button href="/contact/">Check Your Area</Button>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden aspect-video flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500000!2d-66.5!3d46.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca3f18b1ef1c4ad%3A0x3e1a3b1b1b1b1b1b!2sNew%20Brunswick!5e0!3m2!1sen!2sca!4v1709000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Volta Environmental Services - New Brunswick Service Area"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
