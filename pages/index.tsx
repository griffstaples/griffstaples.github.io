import Head from "next/head";
import HomePageContent from "components/home/HomePageContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Griffin Staples</title>
        <meta
          name="description"
          content="Griffin Staples, Software Developer"
        />
        <link rel="icon" href="/galaxy.svg" />
      </Head>
      <main>
        <HomePageContent />
      </main>

      <footer></footer>
    </div>
  );
}
