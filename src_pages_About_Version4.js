import React from "react";
import about from "../data/about.json";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-blue mb-6">About Gfly Studios</h1>
      <div className="text-lg text-white/80 mb-8 max-w-2xl">
        <p>{about.description}</p>
        <p className="mt-3"><strong>Mission:</strong> {about.mission}</p>
      </div>
      <section>
        <h2 className="text-2xl font-bold text-green mb-6">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {about.team.map(member => (
            <div key={member.name} className="flex flex-col items-center bg-white/5 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue" />
              <div className="text-white font-bold text-xl">{member.name}</div>
              <div className="text-blue font-medium mb-2">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}