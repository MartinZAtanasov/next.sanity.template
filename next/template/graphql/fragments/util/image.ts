import { gql } from "@apollo/client";

export const IMAGE_FRAGMENT_NAME = "ImageFragment";

export const IMAGE_FRAGMENT = gql`
  fragment ${IMAGE_FRAGMENT_NAME} on Image {
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
