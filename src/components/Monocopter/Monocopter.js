import {
  ProjectPage,
  ProjectTitle,
  ProjectSubTitle,
  ProjectImageTall,
  ProjectImageIntro,
  ProjectImageWide,
  ProjectParagraph,
  SectionHeader,
  ProjectVideoWide,
  ParagraphBreak,
} from "../ProjectPage/ProjectPage";
import { PageHeader } from "../PageHeader/PageHeader";
import projectPageStyles from "../ProjectPage/ProjectPage.module.css";

export function Monocopter() {
  const projectDetails = {
    title: "Monocopter",
    subtitle: "",
  };

  return (
    <ProjectPage projectDetails={projectDetails}>
      <ProjectTitle>Monocopter</ProjectTitle>
      <ProjectSubTitle> </ProjectSubTitle>
      <ProjectImageIntro imageUrl={"../images/monocopter/monoIntro.png"} />
      <SectionHeader>Introduction</SectionHeader>
      <ProjectParagraph>
        The following monocopter project was one of the projects I worked on as
        a Research Assistant at the Royal Military College of Canada (RMC). The
        purpose of the monocopter was to function as an educational tool for
        undergraduate students and to be used to test the lift produced by a
        wing without the need for a wind tunnel.
      </ProjectParagraph>
      <ParagraphBreak />
      <ProjectParagraph>
        When I started work on this project, much of the groundwork had been
        laid out. The size, rotation rate, wing shape and required weight were
        parameters that had already been determined by my supervisor Dr. Ruben
        E. Perez. My task was to design and build the avionics for the
        monocopter. The final design had to be controllable with a standard RC
        transmitter, be able to wirelessly transmit sensor data back to a
        computer, and have a weight less than 400 grams (total max weight of
        monocopter).
      </ProjectParagraph>
      <SectionHeader>Design</SectionHeader>
      <ProjectParagraph>
        The avionics were built around the Arduino Nano. Wireless data
        transmission was done with the HC-05 bluetooth module which allowed for
        simple, direct communication with a laptop. The sensor module used to
        determine the position, and speed of the monocopter was the MPU9250
        9-axis sensor (an all in one gyro, accelerometer and compass). A
        standard RC receiver was use to read the signal coming from the radio
        controller. However, output from the reciever was not plugged directly
        into the motor given the need to modify the incoming signal for
        moncopter control.
      </ProjectParagraph>
      <SectionHeader>Challenges</SectionHeader>
      <ProjectParagraph>
        In order to control the direction of travelling for a monocopter it is
        important to understand gyroscopic precession. Gyroscopic precession is
        the deflection of a spinning object approximately 90° out of phase from
        where the force is applied. Below is a schematic showing how this
        effects the control of the monocopter:
      </ProjectParagraph>
      <ProjectImageWide
        captionText={"A diagram showing the effect of gyroscopic precession."}
        imageUrl={"../images/monocopter/monocopterSchematic.png"}
      />
      <SectionHeader>Testing</SectionHeader>
      <ProjectParagraph>
        Upon building the monocopter, it was attached to a guide wire and
        allowed to fly. Initial tests only involved using the throttle. With
        these tests we were able to confirm the basic mechanical functioning of
        the monocopter as well as test the data acquisition and start-up routine
        of the monocopter. A video of one such test flight is shown below:
      </ProjectParagraph>
      <ProjectVideoWide
        videoUrl={"../images/monocopter/testflight.mp4"}
        captionText={
          "A test flight of the monocopter. The monocopter here is attached to a guide wire for safety purposes."
        }
      />
      <SectionHeader>Future Work</SectionHeader>
      <ProjectParagraph>
        The direction control of the monocopter has not been fully worked out.
        Initial tests showed that the cyclic rotation rate increases of the
        monocopter wing were not sufficient to accurately control the monocopter
        flight direction. We suspect that this is due to a poor quality ESC and
        motor which might effect how quickly the motor can throttle up and
        throttle back down.Therefore future work on this project would likely
        involve trying out a better ESC/motor combination or adding a flap to
        the monocopter wing.
      </ProjectParagraph>
    </ProjectPage>
  );
}
