"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { FORM_ENDPOINT } from "@/lib/constants";
import { provinces } from "@/lib/canadianLocations";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[\d\s()+-]{7,}$/, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  numberOfDogs: z.string().optional(),
  frequency: z.string().optional(),
  propertySize: z.string().optional(),
  address: z.string().optional(),
  province: z.string().optional(),
  city: z.string().optional(),
  postalCode: z
    .string()
    .optional()
    .refine((val) => !val || /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/.test(val), {
      message: "Please enter a valid postal code (e.g. E2L 4Z3)",
    }),
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
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const serviceType = watch("serviceType");
  const selectedProvince = watch("province");

  const selectedProvinceCities =
    provinces.find((p) => p.value === selectedProvince)?.cities ?? [];

  const formatPostalCode = (value: string) => {
    const cleaned = value.replace(/\s/g, "").toUpperCase();
    if (cleaned.length > 3) {
      return cleaned.slice(0, 3) + " " + cleaned.slice(3, 6);
    }
    return cleaned;
  };

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

  const inputBase =
    "w-full px-4 py-3 rounded-lg border outline-none transition-all text-volta-black placeholder:text-volta-gray-400";
  const inputNormal =
    `${inputBase} border-volta-gray-200 focus:border-volta-blue focus:ring-2 focus:ring-volta-blue/20`;
  const inputError =
    `${inputBase} border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`;
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
                className={errors.name ? inputError : inputNormal}
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
                className={errors.email ? inputError : inputNormal}
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
                className={errors.phone ? inputError : inputNormal}
                placeholder="(555) 555-5555"
              />
              {errors.phone && (
                <p className={errorClasses}>{errors.phone.message}</p>
              )}
            </div>

            {/* Service Type */}
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

          {/* Conditional: Residential Fields */}
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

          {/* Address */}
          <div>
            <label className={labelClasses}>Street Address</label>
            <input
              {...register("address")}
              className={errors.address ? inputError : inputNormal}
              placeholder="123 Main Street"
            />
            {errors.address && (
              <p className={errorClasses}>{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Province */}
            <div>
              <label className={labelClasses}>Province</label>
              <select
                {...register("province", {
                  onChange: () => setValue("city", ""),
                })}
                className={errors.province ? inputError : inputNormal}
              >
                <option value="">Select a province...</option>
                {provinces.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
              {errors.province && (
                <p className={errorClasses}>{errors.province.message}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className={labelClasses}>City</label>
              <select
                {...register("city")}
                className={errors.city ? inputError : inputNormal}
                disabled={!selectedProvince}
              >
                <option value="">
                  {selectedProvince ? "Select a city..." : "Select a province first"}
                </option>
                {selectedProvinceCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className={errorClasses}>{errors.city.message}</p>
              )}
            </div>
          </div>

          {/* Postal Code */}
          <div>
            <label className={labelClasses}>Postal Code</label>
            <input
              {...register("postalCode", {
                onChange: (e) => {
                  const formatted = formatPostalCode(e.target.value);
                  setValue("postalCode", formatted, { shouldValidate: false });
                },
              })}
              className={errors.postalCode ? inputError : inputNormal}
              maxLength={7}
              placeholder="E2L 4Z3"
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
              className={`${inputNormal} resize-none`}
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
