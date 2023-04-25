import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

export const SEO_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment SeoFragment on Seo {
    title
    description
    altBase
    image {
      ...ImageFragment
    }
  }
`;
