import { Document } from "@contentful/rich-text-types";

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ContentfulCategories {
  popular: boolean;
  name: string;
  slug: string;
  description: string;
  image: ContentfulImage;
  fields: {
    slug: string;
  };
}

export interface ContentfulPost {
  fields: {
    title: string;
    slug: string;
    image: ContentfulImage;
    categories: ContentfulCategories[];
    description: string;
    history: string;
    author: string;
    mission: string;
    contact: string;
    projectImages: ContentfulImage[];
    popular: boolean;
    new: boolean;
    Featured: boolean;
    tags: string[];
    tagsColor: string;
    tagsIcon: string;
    value: string;
    content: [];
  };
}
