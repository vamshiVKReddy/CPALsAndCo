"use client";

import { useState, FormEvent } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiSuBRbAadBJGlA6fz9ayeHCeGnd_TnMaqlvpAT3mmDznI9w/formResponse";

const ENTRY = {
  name:    "entry.1901235708",
  email:   "entry.237896832",
  phone:   "entry.114239815",
  service: "entry.2142905557",
  message: "entry.1642940859",
};

const serviceOptions = [
  "Audit & Assurance",
  "Taxation",
  "Business Advisory",
  "Financial Consultancy",
  "Others",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Required fields filled check — drives button state
  const isValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.service !== "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("submitting");

    const body = new FormData();
    body.append(ENTRY.name,    form.name.trim());
    body.append(ENTRY.email,   form.email.trim());
    body.append(ENTRY.phone,   form.phone.trim());
    body.append(ENTRY.service, form.service);
    body.append(ENTRY.message, form.message.trim());

    try {
      await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full px-4 py-2.5 rounded-lg border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white";

  // ── Success ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Received</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-7">
          Thank you for reaching out. We have received your enquiry and will
          get back to you shortly.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
          }}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  // ── Form ─────────────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8">
      <h2 className="font-bold text-slate-900 text-lg mb-1">Send an Enquiry</h2>
      <p className="text-slate-400 text-xs mb-6">
        Fields marked <span className="text-red-500">*</span> are required
      </p>

      <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form" className="space-y-5">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="cf-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
              placeholder="Your full name"
              className={`${inputBase} ${form.name ? "border-slate-200" : "border-slate-200"}`}
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="cf-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
              placeholder="you@company.com"
              className={inputBase}
            />
          </div>
        </div>

        {/* Phone + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Mobile Number
            </label>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="+91 XXXXX XXXXX"
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="cf-service" className="block text-sm font-medium text-slate-700 mb-1.5">
              Required Service <span className="text-red-500">*</span>
            </label>
            <select
              id="cf-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={inputBase}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Query / Message
            <span className="text-slate-400 font-normal ml-1 text-xs">(Optional)</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your requirements or query briefly"
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">
            Something went wrong. Please email us directly at{" "}
            <a href="mailto:ca@cpalsandco.com" className="underline font-medium">
              ca@cpalsandco.com
            </a>
            .
          </p>
        )}

        {/* Submit — grey/disabled until required fields are filled */}
        <button
          type="submit"
          disabled={!isValid || status === "submitting"}
          className={`w-full py-3 font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            isValid && status !== "submitting"
              ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer shadow-sm hover:shadow-md"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {status === "submitting" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting…
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>

        <p className="text-xs text-slate-400 text-center">
          Your information is kept strictly confidential and used only to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
