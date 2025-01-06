import * as contentful from "contentful";

const client = contentful.createClient({
  space: "8hiz3sf3esae",
  accessToken: "AsDilG2g_9lDvoKz42sXHgbKv1TTJGpcX0QzTShxAH8",
  environment: "master",
});

export async function getEntries({
  //Design Service
  content_type,
  fields_titleservice,
  fields_slug,
  fields_revision,
  fields_description,
  fields_area,
  fields_price,
  //Company Overview
  fields_title,
  fields_mission,
  fields_vision,
  fields_culture,
  fields_history,
  //Hero Section
  fields_companyName,
  //Teams
  fields_avatar,
  fields_name,
  fields_job,
  fields_contact,
  // Testimonials
  fields_serviceUsed,
}: {
  //Design Service
  content_type: string;
  fields_slug?: string;
  fields_titleservice?: string;
  fields_revision?: string;
  fields_description?: string;
  fields_area?: string;
  fields_price?: string;
  //Company Overview
  fields_title?: string;
  fields_mission?: string;
  fields_vision?: string;
  fields_culture?: string;
  fields_history?: string;
  //Hero Section
  fields_companyName?: string;
  //Teams
  fields_avatar?: string;
  fields_name?: string;
  fields_job?: string;
  fields_contact?: string;
  // Testimonials
  fields_serviceUsed?: string;
}): Promise<
  contentful.Entry<contentful.EntrySkeletonType, undefined, string>[] | null
> {
  try {
    const data = await client.getEntries({
      content_type,
      // Design Service
      "fields.titleservice": fields_titleservice,
      "fields.slug": fields_slug,
      "fields.revision": fields_revision,
      "fields.description": fields_description,
      "fields.area": fields_area,
      "fields.price": fields_price,
      //Company Overview
      "fields.title": fields_title,
      "fields.mission": fields_mission,
      "fields.vision": fields_vision,
      "fields.Culture": fields_culture,
      "fields.history": fields_history,
      //Hero Section
      "fields.companyName": fields_companyName,
      //Teams
      "fields.avatar": fields_avatar,
      "fields.name": fields_name,
      "fields.job": fields_job,
      "fields.contact": fields_contact,
      // Testimonial Section
      "fields.serviceUsed": fields_serviceUsed,
    });
    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
