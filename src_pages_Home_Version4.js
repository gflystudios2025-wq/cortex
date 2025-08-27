import React from "react";
import { Link } from "react-router-dom";
import FeaturedPortfolio from "../components/FeaturedPortfolio";
import about from "../data/about.json";

export default function Home() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-black via-blue/20 to-green/10">
      <div className="w-full flex flex-col items-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight animate-fadein">
          Where <span className="text-blue">Creativity</span> Meets <span className="text-green">Innovation</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/80 max-w-2xl drop-shadow-lg">
          {about.description}
        </p>
        <Link
          to="/contact"
          className="bg-blue text-white px-8 py-4 rounded-full shadow-lg hover:bg-green hover:scale-105 transition-all duration-200 font-bold text-lg tracking-wide"
        >
          Book a Project
        </Link>
      </div>
      <FeaturedPortfolio />
    </section>
  );
}