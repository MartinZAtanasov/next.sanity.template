import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on Image {
    asset {
      url
      metadata {
        dimensions {
          width
          height
          aspectRatio
        }
        lqip
      }
    }
  }
`;
