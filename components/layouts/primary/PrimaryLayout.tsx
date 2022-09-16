import Box from "@mui/material/Box";
import Head from "next/head";
import Header from "./Header/Header";

interface PrimaryLayoutProps {
  children: JSX.Element;
}
const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <>
      <Head>
        <title>Github Lite</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <main className="px-5">{children}</main>
      </Box>
    </>
  );
};

export default PrimaryLayout;
