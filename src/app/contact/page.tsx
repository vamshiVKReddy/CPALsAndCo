import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CPALS & Co. Speak with our team about your accounting, taxation, audit, or advisory requirements.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    label: "Office Address",
    value: "CPALS & Co, Chartered Accountants\nPrakash Nagar, Hyderabad\nTelangana, India — 500016",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 76708 04206\n+91 93928 33698",
    href: "tel:+917670804206",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "ca@cpalsandco.com",
    href: "mailto:ca@cpalsandco.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    value: "Mon – Sat: 9:30 AM – 6:30 PM\nSunday: Closed",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 pt-32 pb-20" aria-labelledby="contact-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel light />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              id="contact-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mt-2 mb-5 max-w-3xl"
            >
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              We&apos;d be happy to discuss your requirements. Reach out to our
              team for a professional consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <FadeIn direction="left">
                <div className="bg-white rounded-2xl border border-slate-100 p-7">
                  <h2 className="font-bold text-slate-900 text-lg mb-6">Get in Touch</h2>
                  <div className="space-y-5">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0" aria-hidden="true">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a href={item.href} className="text-slate-700 text-sm hover:text-blue-600 transition-colors whitespace-pre-line">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-700 text-sm whitespace-pre-line">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Map placeholder */}
              <FadeIn direction="left" delay={0.1}>
                <div className="bg-slate-100 rounded-2xl overflow-hidden h-48 flex items-center justify-center border border-slate-200">
                  <div className="text-center text-slate-400">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className="text-sm font-medium text-slate-500">Prakash Nagar, Hyderabad</p>
                    <p className="text-xs mt-0.5">Telangana — 500016</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn direction="right">
                <ContactForm />
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
