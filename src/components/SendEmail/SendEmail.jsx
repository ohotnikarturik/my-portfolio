import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { object, string } from "yup";

import style from "./SendEmail.module.scss";
import MainButton from "../MainButton";
import sprite from "../../assets/img/sprite.svg";
import SectionSubtitle from "../SectionSubtitle";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../VisibilitySensor";
import Spinner from "../Spinner";

export default function SendEmail() {
  const [showSentImage, setShowSentImage] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showError, setShowError] = useState(false);
  const [guestName, setGuestName] = useState("");
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const showImageHandler = (name) => {
    setGuestName(name);
    setShowSentImage(true);
    setTimeout(() => {
      setShowSentImage(false);
      setGuestName("");
    }, 5000);
  };

  const showErrorHandler = (val) => {
    setShowSpinner(false);
    setGuestName(val.name);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };
  const sendEmail = (values) => {
    emailjs.send("gmail", "template_djrgj0y", values, "user_8zyqBdZQBLb6PPxQCUitO").then(
      () => {
        setShowSpinner(false);
        showImageHandler(values.name);
      },
      (error) => {
        console.log(error.text);
        showErrorHandler(values);
      }
    );
  };

  const validationSchema = object().shape({
    name: string()
      .min(4, "Name must be at least 4 characters")
      .max(30, "Name should not exceed 30 characters.")
      .required("Please, provide your name!"),
    email: string()
      .email("Email must be a valid email")
      .required("Please, provide your email!"),
    subject: string()
      .min(2, "Subject should be at least 2 characters.")
      .max(30, "Subject should not exceed 30 characters.")
      .required("Please, provide your subject!"),
    message: string()
      .min(2, "Message should be at least 2 characters.")
      .max(30, "Message should not exceed 30 characters.")
      .required("Please, provide your message!"),
  });

  const onSubmit = (values, submitProps) => {
    setShowSpinner(true);
    sendEmail(values);
    submitProps.resetForm();
  };

  if (showSpinner) {
    return <Spinner />;
  }

  if (showSentImage || showError) {
    return (
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {(props) => (
              <div style={props} className={style.messageImageContainer}>
                {showSentImage ? (
                  <>
                    <svg className={style.messageImg}>
                      <use href={`${sprite}#envelope`} />
                    </svg>
                    <SectionSubtitle subtitle="Message was send!" />
                    <div className={style.messageText}>
                      {`I will contact you ${guestName} soon!`}
                    </div>
                    <div className={style.messageText}>Thank you.</div>
                  </>
                ) : (
                  <div className={style.messageText_error}>
                    {`Sorry ${guestName}, something went wrong, try again!`}
                  </div>
                )}
              </div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleSubmit,
        errors,
        handleChange,
        handleBlur,
        touched,
        handleReset,
        dirty,
      }) => (
        <form onSubmit={handleSubmit} className={style.form}>
          <label className={style.label}>
            <div className={style.errorTextContainer}>
              {errors.name && touched.name && (
                <div className={style.errorText}>{errors.name}</div>
              )}
            </div>
            <input
              aria-label="input-1"
              className={
                errors.name && touched.name ? style.inputError : style.input
              }
              type="text"
              placeholder="Name..."
              name="user_name"
              value={values.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
            />
          </label>
          <label className={style.label}>
            <div className={style.errorTextContainer}>
              {errors.email && touched.email && (
                <div className={style.errorText}>{errors.email}</div>
              )}
            </div>
            <input
              aria-label="input-2"
              className={
                errors.email && touched.email ? style.inputError : style.input
              }
              type="text"
              placeholder="Email..."
              name="email"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
          </label>
          <label className={style.label}>
            <div className={style.errorTextContainer}>
              {errors.subject && touched.subject && (
                <div className={style.errorText}>{errors.subject}</div>
              )}
            </div>
            <input
              aria-label="input-3"
              className={
                errors.subject && touched.subject
                  ? style.inputError
                  : style.input
              }
              type="text"
              placeholder="Subject..."
              name="subject"
              value={values.subject}
              onChange={handleChange("subject")}
              onBlur={handleBlur("subject")}
            />
          </label>
          <label className={style.labelTextarea}>
            <div className={style.errorTextContainer}>
              {errors.message && touched.message && (
                <div className={style.errorText}>{errors.message}</div>
              )}
            </div>
            <textarea
              aria-label="textarea"
              className={
                errors.message && touched.message
                  ? style.textareaError
                  : style.textarea
              }
              placeholder="Type message..."
              name="message"
              value={values.message}
              onChange={handleChange("message")}
              onBlur={handleBlur("message")}
            />
          </label>
          <div className={style.buttonsContainer}>
            <MainButton
              label={"Reset"}
              type={"reset"}
              isDisabled={!dirty}
              onReset={handleReset}
            />
            <MainButton label={"Send Message"} type={"submit"} />
          </div>
        </form>
      )}
    </Formik>
  );
}
