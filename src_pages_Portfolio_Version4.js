import React, { useState } from "react";
import portfolioData from "../data/projects.json";

const categories = [
  "All",
  ...Array.from(new Set(portfolioData.projects.map(p => p.category))),
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-blue mb-6">Portfolio</h1>
      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-200 ${
              filter === cat
                ? "bg-blue text-white border-blue"
                : "bg-black text-white border-white hover:bg-green hover:text-black hover:border-green"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {filteredProjects.map(project => (
          <div key={project.title} className="bg-white/5 rounded-2xl shadow-lg p-4 hover:scale-105 transition group">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition" />
            <div className="text-blue font-semibold">{project.category}</div>
            <div className="text-lg font-bold text-white mb-2">{project.title}</div>
            <div className="text-white/80">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}