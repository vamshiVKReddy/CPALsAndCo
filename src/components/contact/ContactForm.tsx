"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

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

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

const isValidPhone = (phone: string) => {
  if (!phone.trim()) return true;
  const digits = phone.trim().replace(/[\s\-().+]/g, "");
  const core = digits.replace(/^(91|0)/, "");
  return /^[6-9]\d{9}$/.test(core);
};

type Status = "idle" | "submitting" | "success" | "error";
type Touched = { name: boolean; email: boolean; phone: boolean; service: boolean };

/* ── Custom dropdown ─────────────────────────────────────────────────── */
function ServiceDropdown({
  value,
  onChange,
  onBlur,
  hasError,
}: {
  value: string;
  onChange: (val: string) => void;
  onBlur: () => void;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        onBlur();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onBlur]);

  const handleSelect = (option: string) => {
    onChange(option);
    setOpen(false);
    onBlur();
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full px-4 py-2.5 rounded-lg border text-sm text-left flex items-center justify-between transition bg-white focus:outline-none focus:ring-2 focus:border-transparent ${
          hasError
            ? "border-red-300 focus:ring-red-400"
            : open
            ? "border-blue-500 ring-2 ring-blue-500"
            : "border-slate-200 hover:border-slate-300 focus:ring-blue-500"
        } ${value ? "text-slate-900" : "text-slate-400"}`}
      >
        <span>{value || "Select a service"}</span>
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Options panel */}
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
          {serviceOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-3 text-sm text-left transition-colors ${
                value === option
                  ? "bg-blue-600 text-white font-medium"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main form ───────────────────────────────────────────────────────── */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [touched, setTouched] = useState<Touched>({
    name: false, email: false, phone: false, service: false,
  });

  const errors = {
    name:    form.name.trim() === "" ? "Name is required" : "",
    email:   form.email.trim() === ""
               ? "Email is required"
               : !isValidEmail(form.email)
               ? "Enter a valid email address (e.g. name@gmail.com)"
               : "",
    phone:   !isValidPhone(form.phone) ? "Enter a valid 10-digit mobile number" : "",
    service: form.service === "" ? "Please select a service" : "",
  };

  const isFormValid = !errors.name && !errors.email && !errors.phone && !errors.service;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleBlur = (field: keyof Touched) =>
    setTouched((p) => ({ ...p, [field]: true }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, service: true });
    if (!isFormValid) return;
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

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-2.5 rounded-lg border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition bg-white ${
      hasError
        ? "border-red-300 focus:ring-red-400"
        : "border-slate-200 hover:border-slate-300 focus:ring-blue-500"
    }`;

  /* Success */
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
          Thank you for reaching out. We have received your enquiry and will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
            setTouched({ name: false, email: false, phone: false, service: false });
          }}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  /* Form */
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
              id="cf-name" type="text" name="name" value={form.name}
              onChange={handleChange} onBlur={() => handleBlur("name")}
              autoComplete="name" placeholder="Your full name"
              className={inputClass(touched.name && !!errors.name)}
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="cf-email" type="email" name="email" value={form.email}
              onChange={handleChange} onBlur={() => handleBlur("email")}
              autoComplete="email" placeholder="name@gmail.com or name@company.com"
              className={inputClass(touched.email && !!errors.email)}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone + Service */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
              Mobile Number
              <span className="text-slate-400 font-normal text-xs ml-1">(Optional)</span>
            </label>
            <input
              id="cf-phone" type="tel" name="phone" value={form.phone}
              onChange={handleChange} onBlur={() => handleBlur("phone")}
              autoComplete="tel" placeholder="10-digit mobile number" maxLength={15}
              className={inputClass(touched.phone && !!errors.phone)}
            />
            {touched.phone && errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Required Service <span className="text-red-500">*</span>
            </label>
            <ServiceDropdown
              value={form.service}
              onChange={(val) => setForm((p) => ({ ...p, service: val }))}
              onBlur={() => handleBlur("service")}
              hasError={touched.service && !!errors.service}
            />
            {touched.service && errors.service && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>
                {errors.service}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Query / Message
            <span className="text-slate-400 font-normal ml-1 text-xs">(Optional)</span>
          </label>
          <textarea
            id="cf-message" name="message" value={form.message}
            onChange={handleChange} rows={4}
            placeholder="Describe your requirements or query briefly"
            className={`${inputClass(false)} resize-none`}
          />
        </div>

        {/* Server error */}
        {status === "error" && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">
            Something went wrong. Please email us at{" "}
            <a href="mailto:ca@cpalsandco.com" className="underline font-medium">ca@cpalsandco.com</a>.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`w-full py-3 font-semibold rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            isFormValid && status !== "submitting"
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
          ) : "Submit Enquiry"}
        </button>

        <p className="text-xs text-slate-400 text-center">
          Your information is kept strictly confidential and used only to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
