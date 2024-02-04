import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const formRef = useRef();

  const [formData, setFormData] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
 

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus({ success: true, message: "Message sent successfully" });
        },
        (error) => {
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });
        }
      )
      .finally(() => {
        setButtonText("Send");
        setFormData(formInitialDetails);

        setTimeout(() => {
          setStatus({});
        }, 5000);
      });
  };

  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };

  return (
    <div>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="contact us" />
            </Col>
            <Col md={6}>
              <h2>Get In Touch</h2>

              <form ref={formRef} onSubmit={sendEmail}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>

                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>

                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>

                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>

                  <Col>
                    <textarea
                      row="6"
                      name="message"
                      value={formData.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    />
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
