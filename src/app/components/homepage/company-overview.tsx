import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function AboutUs() {
  const about = await getEntries({
    content_type: "companyOverview",
  });

  const teams = await getEntries({
    content_type: "teams",
  });

  console.log(about);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-brown-800">
              History:
            </h1>
            <p className="mt-2 text-gray-600">{about[0]?.fields?.history}</p>
          </div>
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-brown-800">
              Culture:
            </h1>
            <p className="mt-2 text-gray-600">{about[0]?.fields?.culture}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={`https:${about[0].fields.images[1].fields.file.url}`}
            alt="farrel"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="flex flex-col md:flex-row justify-around text-center mt-24">
          <div className="mb-4 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold">30</h2>
            <p className="text-gray-600">Year's Experience</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold">150+</h2>
            <p className="text-gray-600">Project Done</p>
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-bold">100+</h2>
            <p className="text-gray-600">Happy Client</p>
          </div>
        </div>
      </div>
      <div className="text-center mb-8 md:mb-0 mt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Design Teams
        </h2>
        <p className="text-gray-700">
          The project was created by a professional team with a lot of
          experience Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque reiciendis totam repellat voluptatibus tenetur? Facere
          voluptates esse eligendi, voluptatibus animi nostrum. Eligendi odit
          animi magni voluptatibus numquam, quam perspiciatis id?
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center mt-16">
        {teams.map((child, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition hover:scale-105 border-4"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24 md:w-36 md:h-36">
                <Image
                  src={`https:${child.fields.avatar.fields.file.url}`}
                  alt={child.fields.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-gray-300 shadow-md"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center mb-2 text-gray-900">
              {child.fields.name}
            </h3>
            <p className="text-gray-700 text-center mb-2">{child.fields.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
