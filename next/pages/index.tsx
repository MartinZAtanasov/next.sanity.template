import { Button } from "@mui/material";
import { Page, PageProps, fetchPageData } from "@template";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const { pageData } = await fetchPageData("/");
  return {
    props: { ...pageData },
  };
};

const Home = (props: PageProps) => {
  const { push } = useRouter();

  return (
    <>
      <Button variant="contained" onClick={() => push("/about")}>
        To About page
      </Button>
      <Page {...props} />
    </>
  );
};

export default Home;
