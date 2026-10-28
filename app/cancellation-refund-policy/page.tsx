import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Vista Travelss",
  description: "Read the Vista Travelss cancellation, change and refund terms for tour package bookings.",
};

const sections = [
  {
    title: "1. Booking Confirmation",
    paragraphs: [
      "All bookings are subject to availability and confirmation.",
      "A booking will be considered confirmed once the required advance payment has been received and the booking has been confirmed.",
      "Customers are responsible for checking their travel dates, destination, hotel details, number of travellers and other booking information before confirmation.",
    ],
  },
  {
    title: "2. Cancellation by the Customer",
    paragraphs: ["The following cancellation charges will apply to tour package bookings:"],
    bullets: [
      "30 days or more before departure: 25% of the total tour package cost will be charged as a cancellation fee.",
      "15–29 days before departure: 35% of the total tour package cost will be charged as a cancellation fee.",
      "Less than 15 days before departure: No refund will be provided.",
    ],
    ending: "The applicable cancellation charges will be calculated based on the total tour package cost, subject to the specific terms communicated at the time of booking and applicable law.",
  },
  {
    title: "3. Non-Refundable Bookings",
    paragraphs: [
      "Once a booking has been confirmed and the agreed travel services have been provided or made available to the customer, no refund will be issued for unused services or failure to utilize the booked services.",
      "For bookings cancelled less than 15 days before departure, no refund will be provided under the cancellation schedule stated above, subject to applicable law and any mandatory refund obligations.",
    ],
  },
  {
    title: "4. Hotel, Cab and Other Travel Services",
    paragraphs: [
      "Hotel reservations, cab bookings, flights, activities and other travel services may be subject to separate cancellation terms.",
      "Where a hotel, transport provider or another service provider has specific non-refundable conditions, these will be communicated to the customer before booking confirmation.",
    ],
  },
  {
    title: "5. Refund Processing",
    bullets: [
      "Eligible refunds will generally be initiated within 7–14 working days after approval.",
      "The actual time taken for the refund to appear in the customer's account may vary depending on the bank or payment provider.",
      "Applicable cancellation charges and disclosed, non-refundable costs may be deducted from the refundable amount.",
      "Refunds will be processed through the original payment method wherever reasonably possible.",
    ],
  },
  {
    title: "6. Cancellation by Vista Travelss",
    paragraphs: [
      "If Vista Travelss cancels a confirmed booking, the customer will be offered an appropriate refund for the affected services or an alternative arrangement, subject to the circumstances, applicable supplier terms and law.",
      "Customers will be informed about available options so that an appropriate resolution can be arranged.",
    ],
  },
  {
    title: "7. Changes to Confirmed Bookings",
    paragraphs: [
      "Requests to change travel dates, destinations, hotels, room categories, passenger details or other booking arrangements are subject to availability.",
      "Additional charges may apply for changes, including price differences imposed by hotels, transport providers or other service providers. Any applicable charges will be communicated to the customer before the changes are confirmed.",
    ],
  },
  {
    title: "8. Force Majeure and Unforeseen Circumstances",
    paragraphs: [
      "Events such as natural disasters, extreme weather, road closures, government restrictions, strikes or other circumstances beyond reasonable control may affect travel arrangements.",
      "In such situations, Vista Travelss will assist customers in exploring available alternatives. Refunds will depend on recoverable amounts from service providers, applicable booking terms and applicable law.",
    ],
  },
  {
    title: "9. Cancellation Procedure",
    bullets: [
      "All cancellation requests must be submitted in writing through the official email address or WhatsApp contact provided by Vista Travelss.",
      "The date the written cancellation request is received will generally determine the applicable cancellation period.",
      "Verbal cancellation requests may not be treated as confirmed until acknowledged in writing.",
      "Customers are advised to retain their booking confirmation and cancellation acknowledgement for reference.",
    ],
  },
];

export default function CancellationRefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f6] px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">
          <ArrowLeft className="h-4 w-4" /> Back to Vista Travelss
        </Link>
        <header className="mt-8 rounded-3xl bg-emerald-950 px-6 py-9 text-white shadow-xl sm:px-10 sm:py-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Vista Travelss</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Cancellation &amp; Refund Policy</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-emerald-100/80">
            We aim to provide our customers with a smooth and hassle-free travel experience. Please read this policy carefully before confirming your booking.
          </p>
        </header>

        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-600">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {section.ending && <p className="mt-3 text-sm leading-7 text-slate-600">{section.ending}</p>}
            </section>
          ))}

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-slate-900">10. Contact Us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              For booking cancellations, refund enquiries or assistance, contact Vista Travelss using either of the official channels below:
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-emerald-900 sm:flex-row sm:flex-wrap">
              <a href="tel:+918076074751" className="inline-flex items-center gap-2 hover:text-emerald-700"><Phone className="h-4 w-4" /> +91 80760 74751</a>
              <a href="https://wa.me/918076074751" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-emerald-700"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href="mailto:info@vistatravelss.com" className="inline-flex items-center gap-2 hover:text-emerald-700"><Mail className="h-4 w-4" /> info@vistatravelss.com</a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
