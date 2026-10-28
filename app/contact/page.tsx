"use client";

import { FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

const WHATSAPP_NUMBER = "918076074751";
const PHONE_NUMBER = "+918076074751";
const CONTACT_EMAIL = "info@vistatravelss.com";

export default function ContactPage() {
  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Vista Travelss, I have a travel enquiry.",
      `Enquiry type: ${formData.get("enquiryType")}`,
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Email: ${formData.get("email") || "Not provided"}`,
      `Destination / stay / route: ${formData.get("destination")}`,
      `Travel dates: ${formData.get("dates") || "Flexible"}`,
      `Details: ${formData.get("details") || "No additional details"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className="min-h-screen bg-[#f6f8f6] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 hover:text-emerald-700">
          <ArrowLeft className="h-4 w-4" /> Back to Vista Travelss
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="rounded-3xl bg-emerald-950 p-7 text-white shadow-xl sm:p-9">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Contact us</span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s plan your next journey.</h1>
            <p className="mt-4 leading-relaxed text-emerald-100/80">
              Ask us about Himachal Pradesh and India tour packages, hotel stays, cab bookings or a customised itinerary.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Phone className="h-5 w-5" /></span>
                <span><span className="block text-xs text-emerald-200/70">Call us</span><span className="font-semibold">+91 80760 74751</span></span>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-4 hover:bg-emerald-400/15">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/15"><MessageCircle className="h-5 w-5" /></span>
                <span><span className="block text-xs text-emerald-100/70">WhatsApp</span><span className="font-semibold">Chat with Vista Travelss</span></span>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Mail className="h-5 w-5" /></span>
                <span><span className="block text-xs text-emerald-200/70">Email</span><span className="font-semibold">{CONTACT_EMAIL}</span></span>
              </a>
            </div>
            <div className="mt-8 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-relaxed text-emerald-100/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>For written booking changes or cancellations, please contact us by email or WhatsApp and keep our written acknowledgement.</span>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <h2 className="text-2xl font-semibold text-slate-900">Send an enquiry</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Fill in the details and we&apos;ll prepare a WhatsApp message for you to send to our team.</p>
            <form onSubmit={submitEnquiry} className="mt-7 space-y-4">
              <div>
                <label htmlFor="enquiryType" className="mb-1.5 block text-sm font-medium text-slate-700">What can we help with?</label>
                <select id="enquiryType" name="enquiryType" required defaultValue="Tour package" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10">
                  <option>Tour package</option>
                  <option>Hotel booking</option>
                  <option>Cab booking</option>
                  <option>Customized tour</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">Your name</label>
                  <input id="name" name="name" autoComplete="name" required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone number</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">Email <span className="font-normal text-slate-400">(optional)</span></label>
                  <input id="email" name="email" type="email" autoComplete="email" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10" />
                </div>
                <div>
                  <label htmlFor="dates" className="mb-1.5 block text-sm font-medium text-slate-700">Travel dates <span className="font-normal text-slate-400">(optional)</span></label>
                  <input id="dates" name="dates" placeholder="e.g. 10–15 June" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10" />
                </div>
              </div>
              <div>
                <label htmlFor="destination" className="mb-1.5 block text-sm font-medium text-slate-700">Destination, hotel or cab route</label>
                <input id="destination" name="destination" required placeholder="Where would you like to go?" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10" />
              </div>
              <div>
                <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-slate-700">Additional details <span className="font-normal text-slate-400">(optional)</span></label>
                <textarea id="details" name="details" rows={4} placeholder="Number of travellers, stay preferences, pickup details..." className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-5 py-3.5 font-bold text-white transition-colors hover:bg-emerald-800 sm:w-auto">
                <Send className="h-4 w-4" /> Continue on WhatsApp
              </button>
              <p className="text-xs text-slate-500">Your message opens in WhatsApp; review it and press Send to submit your enquiry.</p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
