import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";
import { SECTION_TYPE_NAMES } from "../../../types/sections";

export const DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT_NAME =
  "DoubleColumnsTextSectionFragment";

export const DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment ${DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT_NAME} on ${SECTION_TYPE_NAMES.DOUBLE_COLUMNS_TEXT_SECTION} {
    title
    subtitle
    body1Raw
    body2Raw
    images {
      ...ImageFragment
    }
  }
`;
