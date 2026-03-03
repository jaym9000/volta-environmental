import Button from "@/components/ui/Button";
import { Dog } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-volta-gray-50">
      <div className="text-center px-4">
        <Dog size={80} className="text-volta-blue mx-auto mb-6" />
        <h1 className="font-heading text-6xl font-bold text-volta-black mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-bold text-volta-gray-600 mb-4">
          Looks like this page wandered off!
        </h2>
        <p className="text-volta-gray-500 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
