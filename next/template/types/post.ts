import { Image } from "./image";
import { Slug } from "./slug";

export interface Post {
  title: string;
  _createdAt: string;
  slug: Slug;
  excerptRaw: any;
  image: Image;
}
