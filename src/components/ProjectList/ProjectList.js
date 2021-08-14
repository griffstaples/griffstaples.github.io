import { ProjectTile } from "../ProjectTile/ProjectTile";
import styles from "./ProjectList.module.css";

export function ProjectList(props) {
  const projects = props.projects;

  const renderProjectTiles = () => {
    return projects.map((project, idx) => {
      return <ProjectTile project={project} key={idx}></ProjectTile>;
    });
  };

  return (
    <div className={styles.projectListContainer}>{renderProjectTiles()}</div>
  );
}
