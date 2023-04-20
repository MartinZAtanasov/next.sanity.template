export interface Image {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  aspectRatio?: number;
  alt?: string;
}

interface Dimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface SanityImage {
  asset: {
    url: string;
    metadata: {
      dimensions: Dimensions;
      lqip: string;
    };
  };
}
