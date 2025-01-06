import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function DetailServices({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;
  const services = await getEntries({
    content_type: "designService",
    fields_slug: slug,
  });

  if (!services || services.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-red-600">Service Not Found</h2>
      </div>
    );
  }

  const service = services[0];
  const fields = service.fields;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
        <div className="relative h-96">
          <Image
            src={`https:${fields.image.fields.file.url}`}
            alt={fields.titleService}
            className="object-cover"
            layout="fill"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {fields.titleService}
          </h1>
          <p className="text-lg font-semibold text-black mb-2">
            Price: {fields.price}
          </p>
          <p className="text-md text-gray-600 mb-2">
            Revision: {fields.revision}
          </p>
          <p className="text-gray-700 mb-4">{fields.description}</p>
          <div className="flex justify-center mt-7">
            <button className="px-6 py-2 bg-black text-white rounded-lg shadow hover:scale-105 transition duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
