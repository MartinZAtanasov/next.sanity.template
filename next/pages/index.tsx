import { Page, PageProps, fetchPageData } from "../template";

export const getServerSideProps = async () => {
  const { pageData } = await fetchPageData({ pageSlug: "/" });

  return {
    props: { ...pageData },
  };
};

const Home = (props: PageProps) => <Page {...props} />;

export default Home;
