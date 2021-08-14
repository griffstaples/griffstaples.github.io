import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconList}>
        <a
          className={styles.iconContainer}
          href="https://github.com/griffstaples"
        >
          <img className={styles.icon} src="/images/github.png" alt=""></img>
        </a>
        <a
          className={styles.iconContainer}
          href="https://linkedin.com/in/griffinstaples"
        >
          <img className={styles.icon} src="/images/linkedin.png" alt=""></img>
        </a>
      </div>
      <div className={styles.iconLabel}>
        Linkedin Icon and Github Icon by Alfredo Hernandez on Iconscout
      </div>
    </div>
  );
}
