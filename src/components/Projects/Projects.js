import { Container, Row, Col } from "react-bootstrap";
import { ProjectList } from "../ProjectList/ProjectList";
import { PageHeader } from "../PageHeader/PageHeader";
import projects from "./projects.json";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <PageHeader title={"Projects"}></PageHeader>
      <ProjectList projects={projects}></ProjectList>
    </div>
  );
}
