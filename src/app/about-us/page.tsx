import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import { ContentfulImage, ContentfulPost } from "../types/contentful";

export default async function AboutUs() {
  const about = (await getEntries({
    content_type: "companyOverview",
  })) as unknown as ContentfulPost[];

  const teams = (await getEntries({
    content_type: "teams",
  })) as unknown as ContentfulPost[];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-6">
        {about[0]?.fields?.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Company Mission</h2>
          <p className="text-lg">{about[0]?.fields.mission}</p>

          <h2 className="text-2xl font-semibold">Company Vision</h2>
          <p className="text-lg">{about[0]?.fields.Vision}</p>

          <h2 className="text-2xl font-semibold">Culture</h2>
          <p className="text-lg">{about[0]?.fields?.culture}</p>

          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-lg">{about[0]?.fields?.description}</p>

          <h2 className="text-2xl font-semibold">History</h2>
          <p className="text-lg">{about[0]?.fields?.history}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {about[0]?.fields?.images?.map(
            (image: ContentfulImage, index: number) => (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={`https:${image.fields.file.url}`}
                  layout="fill"
                  objectFit="cover"
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-5xl font-bold text-center mb-10 text-black">
          Teams Purfa Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((child, index) => (
            <div
              key={index}
              className="bg-white border-4 border-color-black p-6 rounded-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-36 h-36">
                  <Image
                    src={`https:${child.fields.avatar.fields.file.url}`}
                    alt={child.fields.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-900">
                {child.fields.name}
              </h3>
              <p className="text-gray-700 text-center">{child.fields.job}</p>
              <p className="text-gray-600 text-center mb-4">
                {child.fields.contact}
              </p>
              <div>
                <p className="text-gray-800 text-center">
                  {child.fields.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
