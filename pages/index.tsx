import Head from "next/head";
import HomePageContent from "components/home/HomePageContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Griffin Staples — Marine & Field Robotics Engineer</title>
        <meta
          name="description"
          content="Griffin Staples designs and field-deploys marine and field robotic systems, with five years of production software experience behind him."
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
