import { apolloClient } from "../apolloClient";
import { PAGE_QUERY, POST_CATEGORY_PAGE_QUERY } from "../graphql/queries/page";
import {
  buildPostCategoriesSection,
  formatNavigationData,
  formatSectionsData,
} from "../helpers/sanity";

interface FetchPageDataProps {
  pageSlug: string;
}

export const fetchPageData = async (props: FetchPageDataProps) => {
  const { pageSlug } = props;

  const res = await apolloClient?.query({
    query: PAGE_QUERY,
    variables: { pageSlug },
  });

  const pageDataResponse = res?.data?.allPage?.[0];
  const navigationDataResponse = res?.data?.allNavigation?.[0];
  const rawSections = pageDataResponse?.sections?.sections || [];

  const pageData = {
    ...pageDataResponse,
    sections: formatSectionsData(rawSections),
    navigation: formatNavigationData(navigationDataResponse),
  };

  return { pageData, rawData: { ...res?.data } };
};

export const fetchPostCategoryPageData = async (props: FetchPageDataProps) => {
  const { pageSlug } = props;

  const res = await apolloClient?.query({
    query: POST_CATEGORY_PAGE_QUERY,
    variables: { pageSlug },
  });

  const pageDataResponse = res?.data?.allPage?.[0];
  const navigationDataResponse = res?.data?.allNavigation?.[0];

  const rawSections = pageDataResponse?.sections?.sections || [];

  rawSections.unshift(buildPostCategoriesSection(res?.data?.allPost || []));

  const pageData = {
    ...pageDataResponse,
    sections: formatSectionsData(rawSections),
    navigation: formatNavigationData(navigationDataResponse),
  };

  return { pageData, rawData: { ...res?.data } };
};
