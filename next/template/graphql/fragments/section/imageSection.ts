import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

import { SECTION_TYPE_NAMES } from "../../../types/sections";

export const IMAGE_SECTION_FRAGMENT_NAME = "ImageSectionFragment";

export const IMAGE_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment ${IMAGE_SECTION_FRAGMENT_NAME} on ${SECTION_TYPE_NAMES.IMAGE_SECTION} {
    title
    subtitle
    image {
      ...ImageFragment
    }
    bodyRaw
    isImageRight
  }
`;
