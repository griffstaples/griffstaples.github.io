import { Container, Row, Col } from "react-bootstrap";
import { PageHeader } from "../PageHeader/PageHeader";
import { AboutImage } from "../AboutImage/AboutImage";
import { AboutDescription } from "../AboutDescription/AboutDescription";
import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.aboutContainer}>
      <PageHeader title={"About"}></PageHeader>
      <Row>
        <Col sm={12} md={5}>
          <AboutImage></AboutImage>
        </Col>
        <Col sm={12} md={7} className={styles.descriptionContainer}>
          <AboutDescription></AboutDescription>
        </Col>
      </Row>
    </div>
  );
}
