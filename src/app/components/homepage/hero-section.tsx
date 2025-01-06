import React from "react";
import Link from "next/link";
import { getEntries } from "@/utils/get-contentful-data";
import { ContentfulPost } from "../../types/contentful";
import Image from "next/image";

export default async function HeroSection() {
  const hero = (await getEntries({
    content_type: "heroSection",
  })) as unknown as ContentfulPost[];

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center">
      <div className="absolute inset-0 h-screen">
        <Image
          src={`https:${hero[0]?.fields?.image.fields.file.url}`}
          alt={hero[0]?.fields?.image.fields.title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 flex flex-col items-center mx-auto space-y-8 text-white text-center lg:flex-row lg:space-y-0 lg:space-x-12 justify-center">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold tracking-wide leading-tight">
            {hero[0]?.fields?.companyName}
          </h1>
          <p className="mt-4 text-5xl">{hero[0]?.fields?.caption}</p>
          <div className="mt-6 space-y-4">
            <p className="text-base">{hero[0]?.fields?.description}</p>
          </div>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row justify-center">
            <Link
              href="/about-us"
              className="px-6 py-3 text-white bg-black rounded-md shadow-lg transition duration-300 hover:scale-105"
            >
              View More
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 text-white bg-black rounded-md shadow-lg transition duration-300 hover:scale-105"
            >
              Use Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
