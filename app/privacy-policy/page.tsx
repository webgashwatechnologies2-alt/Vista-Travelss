import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vista Travelss",
  description: "Learn how Vista Travelss uses the details you share when making a travel enquiry.",
};

const sections = [
  {
    title: "Information you provide",
    body: "When you contact us or submit a travel enquiry, you may provide your name, phone number, email address, destination, travel dates, party size and trip preferences. Please do not include payment card details or other sensitive information in an enquiry.",
  },
  {
    title: "How we use your information",
    body: "We use enquiry details to respond to you, prepare requested travel options, coordinate bookings you ask us to arrange, and communicate relevant changes or follow-up information about your enquiry.",
  },
  {
    title: "Sharing with travel providers",
    body: "If you ask us to arrange a trip, hotel, cab or other travel service, we may need to share relevant booking details with the applicable service provider to check availability or provide the requested service. We do not ask you to send information that is not needed for your request.",
  },
  {
    title: "WhatsApp and email",
    body: "If you choose to contact us through WhatsApp or email, your communication is also handled by those third-party services under their own privacy terms. A website enquiry form may prepare a message for you to review and send; it is not sent until you confirm it in the messaging app.",
  },
  {
    title: "Retention and security",
    body: "We retain enquiry and booking information for as long as reasonably needed to respond, provide requested services, maintain relevant business records or meet legal obligations. We take reasonable steps to protect information, but no method of electronic transmission or storage can be guaranteed to be completely secure.",
  },
  {
    title: "Your choices and questions",
    body: "You may contact us to ask about information you have shared or request correction of inaccurate enquiry details. Some records may need to be retained where required for a booking or by law.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f6] px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">
          <ArrowLeft className="h-4 w-4" /> Back to Vista Travelss
        </Link>
        <header className="mt-8 rounded-3xl bg-emerald-950 px-6 py-9 text-white shadow-xl sm:px-10 sm:py-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Vista Travelss</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-emerald-100/80">
            This page explains how we handle the information you choose to share when contacting us about travel.
          </p>
        </header>
        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
            </section>
          ))}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-slate-900">Contact</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">For privacy questions, contact Vista Travelss at:</p>
            <a href="mailto:info@vistatravelss.com" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">
              <Mail className="h-4 w-4" /> info@vistatravelss.com
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
