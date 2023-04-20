import { SECTION_TYPE_NAMES } from "../../types/sections";
import { ImageSection, ImageSectionProps } from "../sections/ImageSection";

const {
  IMAGE_SECTION,
  DOUBLE_COLUMNS_TEXT_SECTION,
  ICONS_SECTION,
  SIDE_IMAGE_SECTION,
  BACKGROUND_IMAGE_SECTION,
  TEXT_SECTION,
} = SECTION_TYPE_NAMES;

export interface PageProps {
  sections: { __typename: string }[];
}

export const Page: React.FC<PageProps> = (props) => {
  const { sections = [] } = props;

  return (
    <>
      {sections.map((section, key: number) => {
        switch (section.__typename) {
          case IMAGE_SECTION:
            return (
              <ImageSection {...{ ...(section as ImageSectionProps), key }} />
            );

          default:
            return null;
        }
      })}
    </>
  );
};
