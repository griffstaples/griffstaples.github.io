import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { PROJECTS, Project } from "data/projects";
import { ProjectDetailLayout } from "components/home/projects/ProjectDetailLayout";

type Neighbour = Pick<Project, "slug" | "title">;

interface Props {
  project: Project;
  previous: Neighbour | null;
  next: Neighbour | null;
}

export default function ProjectDetailPage({ project, previous, next }: Props) {
  return (
    <>
      <Head>
        <title>{project.title} — Griffin Staples</title>
        <meta name="description" content={project.teaser} />
        <link rel="icon" href="/website_favicon.svg" />
      </Head>
      <ProjectDetailLayout
        project={project}
        previous={previous ?? undefined}
        next={next ?? undefined}
      />
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
  const index = PROJECTS.findIndex((p) => p.slug === params?.slug);
  if (index === -1) {
    return { notFound: true };
  }
  const toNeighbour = (p?: Project): Neighbour | null =>
    p ? { slug: p.slug, title: p.title } : null;
  return {
    props: {
      project: PROJECTS[index],
      previous: toNeighbour(PROJECTS[index - 1]),
      next: toNeighbour(PROJECTS[index + 1]),
    },
  };
};
