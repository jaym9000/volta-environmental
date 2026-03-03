"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xplaceholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      }
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

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-volta-gray-200 focus:border-volta-blue focus:ring-2 focus:ring-volta-blue/20 outline-none transition-all text-volta-black placeholder:text-volta-gray-400";
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
            className={inputClasses}
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
            className={inputClasses}
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
            className={inputClasses}
            placeholder="(506) 555-0123"
          />
        </div>
        <div>
          <label className={labelClasses}>Subject *</label>
          <select {...register("subject")} className={inputClasses}>
            <option value="">Select a subject...</option>
            <option value="general">General Inquiry</option>
            <option value="quote">Request a Quote</option>
            <option value="service">Service Question</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          {errors.subject && (
            <p className={errorClasses}>{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Message *</label>
        <textarea
          {...register("message")}
          className={`${inputClasses} resize-none`}
          rows={5}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        {submitting ? (
          "Sending..."
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
