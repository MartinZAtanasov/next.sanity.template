import { gql } from "@apollo/client";
import { PAGE_FRAGMENT } from "../fragments/page/page";
import { IMAGE_FRAGMENT } from "../fragments/util/image";
import {
  NAVIGATION_FRAGMENT,
  NAVIGATION_FRAGMENT_NAME,
} from "../fragments/page/navigation";

export const PAGE_QUERY = gql`
  ${PAGE_FRAGMENT}
  ${NAVIGATION_FRAGMENT}
  query Page($pageSlug: String!) {
    allPage(where: { slug: { current: { eq: $pageSlug } } }) {
      ...PageFragment
    }
    allNavigation(limit: 1) {
      ...${NAVIGATION_FRAGMENT_NAME}
    }
  }
`;

export const POST_CATEGORY_PAGE_QUERY = gql`
  ${PAGE_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${NAVIGATION_FRAGMENT}

  query Page($pageSlug: String!) {
    allPage(where: { slug: { current: { eq: $pageSlug } } }) {
      ...PageFragment
    }

    allPost {
      title
      _createdAt
      slug {
        current
      }
      excerptRaw
      image {
        ...ImageFragment
      }
    }

    allNavigation(limit: 1) {
      ...${NAVIGATION_FRAGMENT_NAME}
    }
  }
`;
