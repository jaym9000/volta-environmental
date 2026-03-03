import { iconMap } from "@/lib/icons";

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function IconCard({ icon, title, description }: IconCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-volta-gray-100">
      <div className="w-14 h-14 rounded-xl bg-volta-blue-light flex items-center justify-center mb-4">
        {Icon && <Icon size={28} className="text-volta-blue" />}
      </div>
      <h3 className="font-heading font-bold text-lg text-volta-black mb-2">
        {title}
      </h3>
      <p className="text-volta-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
