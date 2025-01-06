export interface ContentfulImage {
  fields: {
    title: string;
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
    titleService: string;
    companyName: string;
    caption: string;
    Mission: string;
    Vision: string;
    culture: string;
    title: string;
    slug: string;
    images: ContentfulImage[];
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
    value: string;
    content: [];
    logo: ContentfulImage;
    avatar: ContentfulImage;
    name: string;
    job: string;
    price: string;
    revision: string;
  };
}
