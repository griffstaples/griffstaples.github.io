import { Source_Code_Pro } from "@next/font/google";
import Head from "next/head";
import HomePageContent from "../components/Home/HomePageContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Griffin Staples</title>
        <meta
          name="description"
          content="Griffin Staples, Software Developer"
        />
        <link rel="icon" href="/galaxy.png" />
      </Head>
      <main>
        <HomePageContent />
      </main>

      <footer></footer>
    </div>
  );
}
