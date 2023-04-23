import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Page, PageProps, fetchPageData } from "../template";

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
