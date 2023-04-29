import { apolloClient } from "../apolloClient";
import { PAGE_QUERY, POST_CATEGORY_PAGE_QUERY } from "../graphql/queries/page";
import {
  buildPostCategoriesSection,
  formatNavigationData,
  formatSectionsData,
} from "../helpers/sanity";
import { SECTION_TYPE_NAMES } from "../types/sections";

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
  const rawSections = [...(pageDataResponse?.sections?.sections || [])];

  const shouldInsertSecond =
    !rawSections.length ||
    rawSections[0].__typename === SECTION_TYPE_NAMES.SHORT_HERO_SECTION;

  const postCategoriesSection = buildPostCategoriesSection(
    res?.data?.allPost || []
  );

  rawSections.splice(shouldInsertSecond ? 1 : 0, 0, postCategoriesSection);

  const pageData = {
    ...pageDataResponse,
    sections: formatSectionsData(rawSections),
    navigation: formatNavigationData(navigationDataResponse),
  };

  return { pageData, rawData: { ...res?.data } };
};
