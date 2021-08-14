import { Form, Button } from "react-bootstrap";
import { PageHeader } from "../PageHeader/PageHeader";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div>
      <PageHeader title={"Contact"}></PageHeader>

      <div>
        <Form action="https://formspree.io/f/xqkgloga" method="POST">
          <Form.Group className={styles.inputSpacing} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="Full Name"
              placeholder="Enter full name here"
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className={styles.inputSpacing} controlId="formCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="Company"
              placeholder="Enter company here (optional)"
            />
          </Form.Group>
          <Form.Group
            className={styles.inputSpacing}
            controlId="formPhoneNumber"
          >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="Phone Number"
              required
              type="text"
              placeholder="Enter phone number here"
            />
          </Form.Group>
          <Form.Group className={styles.inputSpacing} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="Email"
              required
              type="email"
              placeholder="Enter email here"
            />
          </Form.Group>
          <Form.Group className={styles.inputSpacing} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="Message"
              required
              as="textarea"
              rows={4}
              type="text"
              placeholder="Enter message here"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
