import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function Teams() {
  const teams = await getEntries({
    content_type: "teams",
  });

  console.log(teams);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Teams Purfa Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((child, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-36 h-36">
                  <Image
                    src={`https:${child.fields.avatar.fields.file.url}`}
                    alt={child.fields.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-gray-300 shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">
                {child.fields.name}
              </h3>
              <p className="text-gray-700 text-center mb-2">
                {child.fields.job}
              </p>
              <p className="text-gray-600 text-center mb-4">
                {child.fields.contact}
              </p>
              <div className="mt-4">
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
