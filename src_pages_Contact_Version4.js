import React, { useState } from "react";
import contact from "../data/contact.json";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-blue mb-6">Contact Us</h1>
      <div className="max-w-lg mx-auto bg-white/5 rounded-xl p-8 shadow-lg">
        {submitted ? (
          <div className="text-green text-center text-xl font-bold">Thank you! We’ll get back to you soon.</div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-4"
            onSubmit={() => setSubmitted(true)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <label className="text-white text-sm">Name</label>
            <input
              type="text"
              name="name"
              required
              className="p-3 rounded bg-black border border-blue text-white"
            />
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="p-3 rounded bg-black border border-blue text-white"
            />
            <label className="text-white text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              className="p-3 rounded bg-black border border-blue text-white"
            />
            <label className="text-white text-sm">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="p-3 rounded bg-black border border-blue text-white"
            />
            <button
              type="submit"
              className="bg-green text-black px-6 py-3 rounded-lg font-bold hover:bg-blue hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-8 text-white/80 text-center">
          <p>
            <span className="font-bold text-blue">Email:</span>{" "}
            <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a>
          </p>
          <p>
            <span className="font-bold text-green">WhatsApp:</span>{" "}
            <a href={`https://wa.me/${contact.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="underline">{contact.whatsapp}</a>
          </p>
          <p>
            <span className="font-bold text-blue">Call:</span>{" "}
            <a href={`tel:${contact.call}`} className="underline">{contact.call}</a>
          </p>
        </div>
      </div>
    </div>
  );
}