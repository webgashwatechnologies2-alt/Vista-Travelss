import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vista Travelss",
  description: "Read the general terms for enquiries and travel services arranged through Vista Travelss.",
};

const sections = [
  {
    title: "Enquiries and availability",
    body: "An enquiry or itinerary request is not a confirmed booking. All travel services are subject to availability and are confirmed only after Vista Travelss has communicated confirmation and any required advance payment has been received.",
  },
  {
    title: "Customer-provided details",
    body: "Please review names, travel dates, destination, hotel and room details, passenger count and other booking information before confirming. You are responsible for providing accurate details and promptly telling us about requested changes.",
  },
  {
    title: "Prices and service providers",
    body: "Prices, inclusions and availability may change before confirmation. Hotels, transport providers, activity operators and other suppliers may have their own service, safety and cancellation terms. Any supplier-specific conditions that apply to your booking will be communicated before confirmation where applicable.",
  },
  {
    title: "Changes and cancellations",
    body: "Changes to a confirmed booking are subject to availability and may involve additional charges. Cancellation charges, refund timelines and procedures are described in our Cancellation & Refund Policy and in the specific terms shared for your booking.",
  },
  {
    title: "Travel conditions",
    body: "Travel plans may be affected by weather, road closures, government restrictions, supplier changes or other circumstances outside reasonable control. We will assist in exploring available alternatives; arrangements and refunds depend on the affected services, recoverable supplier amounts, booking terms and applicable law.",
  },
  {
    title: "Enquiry messages",
    body: "When an enquiry form opens WhatsApp, the message is prepared for your review. It is sent only if you choose to send it in WhatsApp. Please do not include payment card details or other sensitive information in an enquiry.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f6] px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">
          <ArrowLeft className="h-4 w-4" /> Back to Vista Travelss
        </Link>
        <header className="mt-8 rounded-3xl bg-emerald-950 px-6 py-9 text-white shadow-xl sm:px-10 sm:py-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Vista Travelss</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-emerald-100/80">
            These general terms apply to enquiries and travel services requested through Vista Travelss. Booking-specific written terms may also apply.
          </p>
        </header>
        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
              {section.title === "Changes and cancellations" && (
                <Link href="/cancellation-refund-policy/" className="mt-3 inline-block text-sm font-semibold text-emerald-900 underline underline-offset-4 hover:text-emerald-700">
                  Read Cancellation &amp; Refund Policy
                </Link>
              )}
            </section>
          ))}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-slate-900">Contact</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">For questions about these terms, contact Vista Travelss at:</p>
            <a href="mailto:info@vistatravelss.com" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">
              <Mail className="h-4 w-4" /> info@vistatravelss.com
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
