import React from "react";
import contact from "../data/contact.json";
export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue/30 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-white/80 gap-3 px-4">
        <div>
          &copy; {new Date().getFullYear()} Gfly Studios. All rights reserved.
        </div>
        <div>
          <span className="text-blue">Email:</span> <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
          {" | "}
          <span className="text-green">WhatsApp:</span> <a href={`https://wa.me/${contact.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer">{contact.whatsapp}</a>
          {" | "}
          <span className="text-blue">Call:</span> <a href={`tel:${contact.call}`}>{contact.call}</a>
        </div>
      </div>
    </footer>
  );
}