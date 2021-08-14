import styles from "./PageHeader.module.css";

export function PageHeader(props) {
  const title = props.title;
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.pageHeader}>{title}</div>
    </div>
  );
}
