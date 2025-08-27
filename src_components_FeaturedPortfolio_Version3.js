import React from "react";
import { Link } from "react-router-dom";
import portfolioData from "../data/projects.json";

const featuredProjects = portfolioData.projects.slice(0, 3);

export default function FeaturedPortfolio() {
  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Featured Work</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {featuredProjects.map(project => (
          <div key={project.title} className="bg-white/5 rounded-2xl shadow-lg p-6 hover:scale-[1.03] transition-all duration-200 group">
            <div className="overflow-hidden rounded-lg mb-4">
              <img src={project.image} alt={project.title} className="w-full h-44 object-cover group-hover:scale-105 transition" />
            </div>
            <div className="text-sm font-semibold text-blue">{project.category}</div>
            <div className="text-lg font-bold text-white mb-2">{project.title}</div>
            <div className="text-white/80 mb-3">{project.description}</div>
            <Link
              to="/portfolio"
              className="inline-block bg-green text-black px-4 py-2 rounded hover:bg-blue hover:text-white transition font-semibold mt-2"
            >
              View All
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}