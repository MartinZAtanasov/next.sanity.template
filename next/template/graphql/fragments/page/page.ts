import { gql } from '@apollo/client';
import { SECTIONS_FRAGMENT } from '../section/sections';
import { SEO_FRAGMENT } from './seo';

export const PAGE_FRAGMENT = gql`
  ${SECTIONS_FRAGMENT}
  ${SEO_FRAGMENT}

  fragment PageFragment on Page {
    slug {
      current
    }
    seo {
      ...SeoFragment
    }
    sections {
      ...SectionsFragment
    }
  }
`;
