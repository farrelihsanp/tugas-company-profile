import * as contentful from "contentful";

const client = contentful.createClient({
  space: "8hiz3sf3esae",
  accessToken: "AsDilG2g_9lDvoKz42sXHgbKv1TTJGpcX0QzTShxAH8",
  environment: "master",
});

export async function getEntries({
  content_type,
  fields_titleservice,
  fields_slug,
  fields_revision,
  fields_description,
  fields_area,
  fields_price,

  fields_title,
  fields_mission,
  fields_vision,
  fields_culture,
  fields_history,

  fields_companyName,

  fields_avatar,
  fields_name,
  fields_job,
  fields_contact,

  fields_serviceUsed,
}: {
  content_type: string;
  fields_slug?: string;
  fields_titleservice?: string;
  fields_revision?: string;
  fields_description?: string;
  fields_area?: string;
  fields_price?: string;

  fields_title?: string;
  fields_mission?: string;
  fields_vision?: string;
  fields_culture?: string;
  fields_history?: string;

  fields_companyName?: string;

  fields_avatar?: string;
  fields_name?: string;
  fields_job?: string;
  fields_contact?: string;

  fields_serviceUsed?: string;
}): Promise<
  contentful.Entry<contentful.EntrySkeletonType, undefined, string>[] | null
> {
  try {
    const data = await client.getEntries({
      content_type,

      "fields.titleservice": fields_titleservice,
      "fields.slug": fields_slug,
      "fields.revision": fields_revision,
      "fields.description": fields_description,
      "fields.area": fields_area,
      "fields.price": fields_price,

      "fields.title": fields_title,
      "fields.mission": fields_mission,
      "fields.vision": fields_vision,
      "fields.Culture": fields_culture,
      "fields.history": fields_history,

      "fields.companyName": fields_companyName,

      "fields.avatar": fields_avatar,
      "fields.name": fields_name,
      "fields.job": fields_job,
      "fields.contact": fields_contact,

      "fields.serviceUsed": fields_serviceUsed,
    });
    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
