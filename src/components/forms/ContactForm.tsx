"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { FORM_ENDPOINT } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\d\s()+-]{7,}$/.test(val), {
      message: "Please enter a valid phone number",
    }),
  serviceType: z.string().min(1, "Please select a service"),
  numberOfDogs: z.string().optional(),
  frequency: z.string().optional(),
  propertySize: z.string().optional(),
  postalCode: z
    .string()
    .optional()
    .refine((val) => !val || /^[A-Za-z]\d[A-Za-z]/.test(val), {
      message: "Please enter a valid postal code (e.g. E2L)",
    }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
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
        body: JSON.stringify({ ...data, formType: "contact" }),
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
      <div className="bg-volta-green-light rounded-2xl p-8 text-center">
        <CheckCircle size={48} className="text-volta-green mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-volta-black mb-2">
          Message Sent!
        </h3>
        <p className="text-volta-gray-500">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg border outline-none transition-all text-volta-black placeholder:text-volta-gray-400";
  const inputNormal =
    `${inputBase} border-volta-gray-200 focus:border-volta-blue focus:ring-2 focus:ring-volta-blue/20`;
  const inputError =
    `${inputBase} border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`;
  const labelClasses = "block text-sm font-semibold text-volta-gray-600 mb-1.5";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-sm border border-volta-gray-100 p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Full Name *</label>
          <input
            {...register("name")}
            className={errors.name ? inputError : inputNormal}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className={errorClasses}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Email *</label>
          <input
            {...register("email")}
            type="email"
            className={errors.email ? inputError : inputNormal}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Phone</label>
          <input
            {...register("phone")}
            type="tel"
            className={errors.phone ? inputError : inputNormal}
            placeholder="(555) 555-5555"
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Service Type *</label>
          <select {...register("serviceType")} className={errors.serviceType ? inputError : inputNormal}>
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

      {/* Conditional: Residential / One-Time Fields */}
      {(serviceType === "residential" || serviceType === "one-time") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>Number of Dogs</label>
            <select {...register("numberOfDogs")} className={inputNormal}>
              <option value="">Select...</option>
              <option value="1-2">1–2 Dogs</option>
              <option value="3-4">3–4 Dogs</option>
              <option value="5+">5+ Dogs</option>
            </select>
          </div>
          {serviceType === "residential" && (
            <div>
              <label className={labelClasses}>Preferred Frequency</label>
              <select {...register("frequency")} className={inputNormal}>
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
          <select {...register("propertySize")} className={inputNormal}>
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
        <label className={labelClasses}>Postal Code (first 3 characters)</label>
        <input
          {...register("postalCode")}
          className={errors.postalCode ? inputError : inputNormal}
          maxLength={3}
          placeholder="E2L"
        />
        {errors.postalCode && (
          <p className={errorClasses}>{errors.postalCode.message}</p>
        )}
      </div>

      {/* Additional Details */}
      <div>
        <label className={labelClasses}>Additional Details</label>
        <textarea
          {...register("message")}
          className={`${inputNormal} resize-none`}
          rows={4}
          placeholder="Any special requirements, yard details, etc. (optional)"
        />
      </div>

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
  );
}
