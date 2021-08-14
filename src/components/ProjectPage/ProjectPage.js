import styles from "./ProjectPage.module.css";

export function ProjectPage(props) {
  const projectDetails = props.projectDetails;
  return <div className={styles.projectPage}>{props.children}</div>;
}

export function ProjectTitle(props) {
  const title = props.title;
  return <div className={styles.projectTitle}>{props.children}</div>;
}

export function ProjectSubTitle(props) {
  const subTitle = props.subTitle;
  return <div> {props.children} </div>;
}

export function ProjectParagraph(props) {
  const text = props.text;
  return <div className={styles.paragraph}> {props.children} </div>;
}

export function SectionHeader(props) {
  const header = props.header;
  return <div className={styles.sectionHeader}>{props.children}</div>;
}

export function ProjectImageWide(props) {
  const imageUrl = props.imageUrl;
  const altText = props.altText | " ";
  const captionText = props.captionText;
  return (
    <MediaContainer>
      <div className={styles.imageBoxWide}>
        <img className={styles.imageWide} alt={altText} src={imageUrl}></img>
      </div>
      <Caption captionText={captionText}></Caption>
    </MediaContainer>
  );
}

export function ProjectImageIntro(props) {
  const imageUrl = props.imageUrl;
  const altText = props.altText | "";
  return (
    <div className={styles.imageBoxIntro}>
      <img className={styles.imageIntro} alt={altText} src={imageUrl}></img>
    </div>
  );
}

export function ProjectImageTall(props) {
  const imageUrl = props.imageUrl;
  const altText = props.altText | "";
  const captionText = props.captionText;
  return (
    <div className={styles.imageBoxWide}>
      <img className={styles.imageWide} alt={altText} src={imageUrl}></img>
      <div className={styles.caption}>{captionText}</div>
    </div>
  );
}

export function ProjectVideoWide(props) {
  const videoUrl = props.videoUrl;
  const captionText = props.captionText;
  return (
    <MediaContainer>
      <div className={styles.videoBoxWide}>
        <div>
          <video className={styles.videoWide} type="video/mp4">
            <source src="../images/monocopter/testflight.mp4"></source>
          </video>
        </div>
      </div>
      <Caption captionText={captionText}></Caption>
    </MediaContainer>
  );
}

function Caption(props) {
  return (
    <div className={styles.caption}>
      <div>{props.captionText}</div>
    </div>
  );
}

export function ParagraphBreak() {
  return <br />;
}

function MediaContainer(props) {
  return <div className={styles.mediaContainer}>{props.children}</div>;
}
