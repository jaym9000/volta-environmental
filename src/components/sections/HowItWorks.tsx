import { iconMap } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Getting Started Is Easy"
          subtitle="Three simple steps to a cleaner yard."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {HOW_IT_WORKS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.step} className="text-center relative">
                {/* Step number */}
                <div className="w-16 h-16 rounded-full bg-volta-blue text-white font-heading font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                {/* Connector line (hidden on mobile) */}
                {item.step < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-volta-blue-200" />
                )}
                <div className="w-14 h-14 rounded-xl bg-volta-blue-light flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon size={28} className="text-volta-blue" />}
                </div>
                <h3 className="font-heading font-bold text-xl text-volta-black mb-2">
                  {item.title}
                </h3>
                <p className="text-volta-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <Button href="/contact/" size="lg">
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
}
