import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

export const SIDE_IMAGE_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment SideImageSectionFragment on SideImageSection {
    title
    subtitle
    bodyRaw
    sideImage {
      ...ImageFragment
    }
    otherImages {
      ...ImageFragment
    }
  }
`;
