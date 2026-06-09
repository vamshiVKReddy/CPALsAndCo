"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import PhoneInput, { isValidPhoneNumber, type Value as E164Number } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const serviceOptions = [
  "Audit & Assurance",
  "Taxation",
  "Business Advisory",
  "Financial Consultancy",
  "Others",
];

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

type Status = "idle" | "submitting" | "success" | "error";
type Touched = { name: boolean; email: boolean; phone: boolean; service: boolean };

/* ── Custom service dropdown ─────────────────────────────────────────── */
function ServiceDropdown({
  value, onChange, onBlur, hasError,
}: {
  value: string;
  onChange: (val: string) => void;
  onBlur: () => void;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} className="relative">
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
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
          {serviceOptions.map((option) => (
            <button key={option} type="button"
              onClick={() => { onChange(option); setOpen(false); onBlur(); }}
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
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [phone, setPhone] = useState<E164Number | undefined>(undefined);
  const [touched, setTouched] = useState<Touched>({
    name: false, email: false, phone: false, service: false,
  });

  // Phone is considered "entered" only if there are digits beyond the country code.
  // react-phone-number-input returns undefined (empty) or a string starting with +.
  // A value like "+1" or "+91" with no subscriber digits is still "empty" for our purposes.
  const phoneHasDigits = !!phone && phone.replace(/^\+\d{1,3}/, "").trim().length > 0;

  const phoneError = (() => {
    if (!phoneHasDigits) return ""; // empty or only country code — always valid
    return isValidPhoneNumber(phone!) ? "" : "Enter a valid phone number for the selected country";
  })();

  const errors = {
    name:    form.name.trim() === "" ? "Name is required" : "",
    email:   form.email.trim() === ""
               ? "Email is required"
               : !isValidEmail(form.email)
               ? "Enter a valid email (e.g. name@gmail.com)"
               : "",
    phone:   phoneError,
    service: form.service === "" ? "Please select a service" : "",
  };

  const isFormValid =
    !errors.name && !errors.email && !errors.service &&
    (!phoneHasDigits || isValidPhoneNumber(phone!));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleBlur = (field: keyof Touched) =>
    setTouched((p) => ({ ...p, [field]: true }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, service: true });
    if (!isFormValid) return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: phoneHasDigits ? (phone ?? "") : "",
          service: form.service,
          message: form.message.trim(),
        }),
      });
      setStatus(res.ok ? "success" : "error");
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

  const ErrorMsg = ({ msg }: { msg: string }) => (
    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
      <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
      </svg>
      {msg}
    </p>
  );

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
            setForm({ name: "", email: "", service: "", message: "" });
            setPhone(undefined);
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
    <>
      {/* Override react-phone-number-input default styles to match our design */}
      <style>{`
        .PhoneInput {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          background: white;
          transition: border-color 0.15s, box-shadow 0.15s;
          overflow: hidden;
        }
        .PhoneInput:focus-within {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
        }
        .PhoneInput--error {
          border-color: #fca5a5;
        }
        .PhoneInput--error:focus-within {
          box-shadow: 0 0 0 2px rgba(239,68,68,0.2);
        }
        .PhoneInputCountry {
          display: flex;
          align-items: center;
          padding: 0 10px 0 12px;
          border-right: 1px solid #e2e8f0;
          background: #f8fafc;
          height: 100%;
          cursor: pointer;
          gap: 6px;
        }
        .PhoneInputCountrySelect {
          position: absolute;
          top: 0; left: 0;
          height: 100%; width: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .PhoneInputCountryIcon {
          width: 20px;
          height: 14px;
          border-radius: 2px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .PhoneInputCountryIconImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .PhoneInputCountrySelectArrow {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #94a3b8;
          margin-left: 2px;
        }
        .PhoneInputInput {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px 14px;
          font-size: 0.875rem;
          color: #1e293b;
          background: transparent;
        }
        .PhoneInputInput::placeholder {
          color: #94a3b8;
        }
      `}</style>

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
              <input id="cf-name" type="text" name="name" value={form.name}
                onChange={handleChange} onBlur={() => handleBlur("name")}
                autoComplete="name" placeholder="Your full name"
                className={inputClass(touched.name && !!errors.name)} />
              {touched.name && errors.name && <ErrorMsg msg={errors.name} />}
            </div>
            <div>
              <label htmlFor="cf-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input id="cf-email" type="email" name="email" value={form.email}
                onChange={handleChange} onBlur={() => handleBlur("email")}
                autoComplete="email" placeholder="name@gmail.com or name@company.com"
                className={inputClass(touched.email && !!errors.email)} />
              {touched.email && errors.email && <ErrorMsg msg={errors.email} />}
            </div>
          </div>

          {/* Phone + Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* International Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Mobile Number
                <span className="text-slate-400 font-normal text-xs ml-1">(Optional)</span>
              </label>
              <PhoneInput
                international
                defaultCountry="IN"
                value={phone}
                onChange={setPhone}
                onBlur={() => handleBlur("phone")}
                placeholder="Enter phone number"
                className={touched.phone && phoneError ? "PhoneInput--error" : ""}
              />
              {touched.phone && phoneHasDigits && phoneError && <ErrorMsg msg={phoneError} />}
            </div>

            {/* Service */}
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
              {touched.service && errors.service && <ErrorMsg msg={errors.service} />}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="cf-message" className="block text-sm font-medium text-slate-700 mb-1.5">
              Query / Message
              <span className="text-slate-400 font-normal ml-1 text-xs">(Optional)</span>
            </label>
            <textarea id="cf-message" name="message" value={form.message}
              onChange={handleChange} rows={4}
              placeholder="Describe your requirements or query briefly"
              className={`${inputClass(false)} resize-none`} />
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
    </>
  );
}
