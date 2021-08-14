import styles from "./ProjectTile.module.css";

export function ProjectTile(props) {
  const project = props.project;
  return (
    <div className={styles.projectTileContainer}>
      <a href={project.projectPageLink}>
        <div className={styles.imageTitleContainer}>
          <div className={styles.imageTextContainer}>{project.name}</div>
        </div>
        <div class={styles.sliderContainer}>
          <div className={styles.sliderText}>{project.hoverText}</div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.imageStyle}
            src={project.imageUrl}
            alt=""
          ></img>
        </div>
      </a>
    </div>
  );
}
