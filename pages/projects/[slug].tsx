import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { PROJECTS, Project } from "data/projects";
import { ProjectDetailLayout } from "components/home/projects/ProjectDetailLayout";

interface Props {
  project: Project;
}

export default function ProjectDetailPage({ project }: Props) {
  return (
    <>
      <Head>
        <title>{project.title} — Griffin Staples</title>
        <meta name="description" content={project.teaser} />
        <link rel="icon" href="/website_favicon.svg" />
      </Head>
      <ProjectDetailLayout project={project} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: PROJECTS.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = PROJECTS.find((p) => p.slug === params?.slug);
  if (!project) {
    return { notFound: true };
  }
  return { props: { project } };
};
