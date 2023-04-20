import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

export const IMAGE_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment ImageSectionFragment on ImageSection {
    title
    subtitle
    image {
      ...ImageFragment
    }
    bodyRaw
    isImageRight
  }
`;
