import React from "react";
import servicesData from "../data/services.json";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-blue mb-6">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {servicesData.services.map(service => (
          <div key={service.title} className="bg-white/5 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all group">
            <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            <div className="text-xl font-bold text-white mb-2">{service.title}</div>
            <div className="text-white/80 mb-6">{service.description}</div>
            <Link
              to="/contact"
              className="bg-green text-black px-5 py-2 rounded hover:bg-blue hover:text-white transition font-semibold"
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}