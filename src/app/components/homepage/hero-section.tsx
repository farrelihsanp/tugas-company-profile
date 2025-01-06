import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.adsttc.com/media/images/6777/93c6/8774/0101/87cd/354e/slideshow/moment-boutique-store-modum-atelier_46.jpg?1735890182)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 flex flex-col items-center mx-auto space-y-8 text-white text-center lg:flex-row lg:space-y-0 lg:space-x-12 justify-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold tracking-wide leading-tight">
            PURFA DESIGN
          </h1>
          <p className="mt-4 text-5xl">
            Crafting spaces that harmonize modern aesthetics with timeless
            elegance.
          </p>
          <div className="mt-6 space-y-4">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              necessitatibus laborum voluptatem suscipit dolores ea repudiandae
              accusamus pariatur natus neque aliquid, voluptate deserunt placeat
              laudantium incidunt. Minima labore quia aliquid.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row justify-center">
            <Link
              href="/about-us"
              className="px-6 py-3 text-white bg-black rounded-md shadow-lg transition duration-300"
            >
              View More
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 text-white bg-black rounded-md shadow-lg transition duration-300"
            >
              Use Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
