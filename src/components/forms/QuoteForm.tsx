"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { FORM_ENDPOINT } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  numberOfDogs: z.string().optional(),
  frequency: z.string().optional(),
  propertySize: z.string().optional(),
  postalCode: z.string().optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ ...data, formType: "quote" }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="py-20 md:py-28 bg-volta-gray-50">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <CheckCircle size={64} className="text-volta-green mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-volta-black mb-4">
            Thank You!
          </h2>
          <p className="text-volta-gray-500 text-lg">
            We&apos;ve received your request and will get back to you within 24
            hours. We look forward to helping you enjoy a cleaner yard!
          </p>
        </div>
      </section>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-volta-gray-200 focus:border-volta-blue focus:ring-2 focus:ring-volta-blue/20 outline-none transition-all text-volta-black placeholder:text-volta-gray-400";
  const labelClasses = "block text-sm font-semibold text-volta-gray-600 mb-1.5";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <section id="quote" className="py-20 md:py-28 bg-volta-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get Your Free Quote"
          subtitle="Fill out the form below and we'll get back to you within 24 hours with a customized quote."
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-sm border border-volta-gray-100 p-8 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className={labelClasses}>Full Name *</label>
              <input
                {...register("name")}
                className={inputClasses}
                placeholder="John Smith"
              />
              {errors.name && (
                <p className={errorClasses}>{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className={labelClasses}>Email *</label>
              <input
                {...register("email")}
                type="email"
                className={inputClasses}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className={errorClasses}>{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={labelClasses}>Phone *</label>
              <input
                {...register("phone")}
                type="tel"
                className={inputClasses}
                placeholder="(506) 555-0123"
              />
              {errors.phone && (
                <p className={errorClasses}>{errors.phone.message}</p>
              )}
            </div>

            {/* Service Type */}
            <div>
              <label className={labelClasses}>Service Type *</label>
              <select {...register("serviceType")} className={inputClasses}>
                <option value="">Select a service...</option>
                <option value="residential">Residential Pet Waste Removal</option>
                <option value="commercial">Commercial Property Cleanup</option>
                <option value="one-time">One-Time Deep Cleanup</option>
                <option value="junk-removal">Light Junk Removal</option>
              </select>
              {errors.serviceType && (
                <p className={errorClasses}>{errors.serviceType.message}</p>
              )}
            </div>
          </div>

          {/* Conditional: Residential Fields */}
          {(serviceType === "residential" || serviceType === "one-time") && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Number of Dogs</label>
                <select {...register("numberOfDogs")} className={inputClasses}>
                  <option value="">Select...</option>
                  <option value="1-2">1–2 Dogs</option>
                  <option value="3-4">3–4 Dogs</option>
                  <option value="5+">5+ Dogs</option>
                </select>
              </div>
              {serviceType === "residential" && (
                <div>
                  <label className={labelClasses}>Preferred Frequency</label>
                  <select {...register("frequency")} className={inputClasses}>
                    <option value="">Select...</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>

                  </select>
                </div>
              )}
            </div>
          )}

          {/* Conditional: Commercial Fields */}
          {serviceType === "commercial" && (
            <div>
              <label className={labelClasses}>Property Size</label>
              <select {...register("propertySize")} className={inputClasses}>
                <option value="">Select...</option>
                <option value="small">Small (1–10 units)</option>
                <option value="medium">Medium (10–20 units)</option>
                <option value="large">Large (20–35 units)</option>
                <option value="custom">Custom (35+ units)</option>
              </select>
            </div>
          )}

          {/* Postal Code */}
          <div>
            <label className={labelClasses}>Postal Code</label>
            <input
              {...register("postalCode")}
              className={inputClasses}
              placeholder="E2L"
            />
            {errors.postalCode && (
              <p className={errorClasses}>{errors.postalCode.message}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className={labelClasses}>Additional Notes</label>
            <textarea
              {...register("notes")}
              className={`${inputClasses} resize-none`}
              rows={4}
              placeholder="Tell us about your yard, any special requirements, etc."
            />
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full">
            {submitting ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Send My Free Quote Request
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
