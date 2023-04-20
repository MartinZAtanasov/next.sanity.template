import { gql } from "@apollo/client";
import { IMAGE_FRAGMENT } from "../util/image";

export const DOUBLE_COLUMNS_TEXT_SECTION_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment DoubleColumnsTextSectionFragment on DoubleColumnsTextSection {
    title
    subtitle
    body1Raw
    body2Raw
    images {
      ...ImageFragment
    }
  }
`;
