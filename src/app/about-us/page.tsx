import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import { ContentfulImage, ContentfulPost } from "../types/contentful";

export default async function AboutUs() {
  const about = (await getEntries({
    content_type: "companyOverview",
  })) as unknown as ContentfulPost[];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">
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
    </section>
  );
}
