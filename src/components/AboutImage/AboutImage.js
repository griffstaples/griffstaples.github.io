import { Image } from "react-bootstrap";
import styles from "./AboutImage.module.css";

export function AboutImage() {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.imageStyle}
        src="/images/about/headshot.jpg"
        alt="portrait of myself"
      ></img>
    </div>
    // <Image src="/images/about/headshot.jpg"></Image>
  );
}
