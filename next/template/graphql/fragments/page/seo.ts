import { gql } from "@apollo/client";

export const SEO_FRAGMENT = gql`
  fragment SeoFragment on Seo {
    title
    description
    altBase
  }
`;
