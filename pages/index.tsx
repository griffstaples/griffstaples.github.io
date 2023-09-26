import Head from "next/head";
import HomePageContent from "components/home/HomePageContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Griffin Staples, Software Developer</title>
        <meta
          name="description"
          content="An introduction to me and my software experience, including past and present work and projects."
        />
        <link rel="icon" href="/website_favicon.svg" />
      </Head>
      <main>
        <HomePageContent />
      </main>

      <footer></footer>
    </div>
  );
}
