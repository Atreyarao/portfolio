"use client";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [code, setCode] = useState(0);
  useEffect(() => {
    setCode(Math.floor(Math.random() * 10000));
  }, []);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    template: "nicolas react",
  });

  const { name, email, subject, phone, message, template } = mailData;
  const [error, setError] = useState(null);
  const [fieldError, setFieldError] = useState(null);
  const [codeError, setCodeError] = useState(null);
  const [codeValue, setCodeValue] = useState("");
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      subject.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      setFieldError(true);
      setError(true);
      clearError();
    } else {
      if (Number(code) === Number(codeValue)) {
        emailjs
          .send(
            "service_0ngcs2l", // service id
            "template_z8cj9er", // template id
            mailData,
            "b7j0wjgu9l8wumdbZ" // public api
          )
          .then(
            (response) => {
              setError(false);
              clearError();
              setFieldError(false);
              alert("Sent")
              setMailData({
                name: "",
                email: "",
                message: "",
                phone: "",
                subject: "",
                template: "nicolas react",
              });
              setCode("");
            },
            (err) => {
              console.log(err.text);
            }
          );
      } else {
        setCodeError(true);
        setTimeout(() => {
          setCodeError(null);
        }, 2000);
      }
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <form id="contactForm" onSubmit={(e) => onSubmit(e)}>
      <div
        className="error_box"
        id="empty-form"
        style={{ display: error ? "block" : "none" }}
      >
        <p>Please Fill Required Fields</p>
      </div>
      <div className="error_box" id="subject-alert">
        <p>Please Select Subject</p>
      </div>
      <div
        className="error_box"
        id="security-alert"
        style={{ display: codeError ? "block" : "none" }}
      >
        <p>Security code does not match !</p>
      </div>
      <div className="error_box" id="email-invalid">
        <p>Please enter a valid email address. Exp. example@gmail.com</p>
      </div>
      <div className="error_box" id="phone-invalid">
        <p>Please enter a valid phone number.Exp. +998991774433</p>
      </div>
      <div className="error_box" id="error_mail">
        <p />
      </div>
      <div className="success_box" id="success_mail">
        <p>
          Your message has been sent. We will contact you as soon as possible.
        </p>
      </div>
      <ul>
        <li className={fieldError && name.length === 0 ? "error" : ""}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => onChange(e)}
            value={name}
            className="cf-form-control"
          />
          <span />
        </li>
        <li className={fieldError && email.length === 0 ? "error" : ""}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
            className="cf-form-control"
          />
          <span />
        </li>
        <li className={fieldError && subject.length === 0 ? "error" : ""}>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={(e) => onChange(e)}
            value={subject}
            className="cf-form-control"
          />
          <span />
        </li>
        <li className={fieldError && phone.length === 0 ? "error" : ""}>
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            onChange={(e) => onChange(e)}
            value={phone}
            className="cf-form-control"
          />
          <span />
        </li>
        <li
          id="text-area-w"
          className={fieldError && message.length === 0 ? "error" : ""}
        >
          <textarea
            placeholder="Message"
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
            className="cf-form-control"
        
          />
        </li>
        <li
          id="enter_code"
          className={fieldError && message.length === 0 ? "error" : ""}
        >
          <span id="txtCaptchaSpan">{code}</span>
          <input
            type="number"
            className="cf-form-control"
            name="contact_question"
            id="txtInput"
            autoComplete="off"
            placeholder="Please Enter Code *"
            value={codeValue}
            onChange={(e) => setCodeValue(e.target.value)}
          />
          <input type="hidden" id="txtCaptcha" />
        </li>
      </ul>
      <div className="nicolas_sm_button">
        <button id="send_message" onSubmit={(e) => onSubmit(e)}>
          Submit <img src="img/header/arrow.png" alt="arrow" />
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
