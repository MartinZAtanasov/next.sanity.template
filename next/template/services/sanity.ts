import { apolloClient } from "../apolloClient";
import { PAGE_QUERY, POST_CATEGORY_PAGE_QUERY } from "../graphql/queries/page";
import {
  buildPostCategoriesSection,
  formatSectionsData,
} from "../helpers/sanity";

interface FetchPageDataProps {
  pageSlug: string;
  isPostCategory?: boolean;
}

export const fetchPageData = async (props: FetchPageDataProps) => {
  const { pageSlug, isPostCategory } = props;

  const res = await apolloClient?.query({
    query: isPostCategory ? POST_CATEGORY_PAGE_QUERY : PAGE_QUERY,
    variables: { pageSlug },
  });

  const pageDataResponse = res?.data?.allPage?.[0];

  const rawSections = pageDataResponse?.sections?.sections || [];

  if (isPostCategory) {
    rawSections.unshift(buildPostCategoriesSection(res?.data?.allPost || []));
  }

  const pageData = {
    ...pageDataResponse,
    sections: formatSectionsData(rawSections),
  };

  return { pageData, rawData: { ...res?.data } };
};
