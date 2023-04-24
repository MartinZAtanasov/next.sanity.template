import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";
import { SECTION_TYPE_NAMES } from "../../../types/sections";

export const SIDE_IMAGE_SECTION_FRAGMENT_NAME = "SideImageSectionFragment";

export const SIDE_IMAGE_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment ${SIDE_IMAGE_SECTION_FRAGMENT_NAME} on ${SECTION_TYPE_NAMES.SIDE_IMAGE_SECTION} {
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
