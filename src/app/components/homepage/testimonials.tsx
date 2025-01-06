import { getEntries } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function Testimonials() {
  const testimonials = await getEntries({
    content_type: "testimonialSection",
  });

  console.log(testimonials);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  {" "}
                  <Image
                    src={`https:${testimonial.fields.avatar.fields.file.url}`}
                    alt={testimonial.fields.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-gray-300 shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-1 text-gray-900">
                {testimonial.fields.name}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {testimonial.fields.job}
              </p>
              <div className="mt-4">
                <p className="text-gray-800 text-center">
                  {testimonial.fields.description.content[0].content[0].value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
