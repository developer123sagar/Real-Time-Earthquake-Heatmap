export interface IServicesData {
  id: number;
  title: string;
  description1: string;
  description2: string;
  photo: string;
  icon: string;
  service_order: number;
}

export interface IAwardsData {
  id: number;
  year: string;
  title: string;
  description: string;
  image_thumbnail: string;
  image_caption: string;
  type: null | string;
  order: number;
}

export interface IPostsPayload {
  title: string;
  body: string;
  userId: number;
}
