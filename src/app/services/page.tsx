import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";
import { ContentfulPost } from "../types/contentful";
export default async function ProductServices() {
  const services = (await getEntries({
    content_type: "designService",
  })) as unknown as ContentfulPost[];

  if (!services || services.length === 0) {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            No Services Available
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">
          Architectural Design Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-72 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link href={`/services/${service.fields.slug}`}>
                <Image
                  className="object-cover w-full h-full"
                  src={`https:${service.fields.image?.fields?.file?.url}`}
                  alt={service.fields.titleService}
                  width={500}
                  height={300}
                  priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4 transition-opacity duration-300 hover:bg-opacity-80">
                  <h3 className="text-3xl font-bold text-center">
                    {service.fields.titleService}
                  </h3>
                  <p className="mt-2 text-center text-sm md:text-base">
                    {service.fields.caption}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
