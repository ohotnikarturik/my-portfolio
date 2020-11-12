import React from "react";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { object, string } from "yup";

const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_MY_USER_ID;
import style from "./SendEmail.module.scss";
import MainButton from "../MainButton";

export default function SendEmail() {
  function sendEmail(e) {
    e.preventDefault();
    console.log("hi");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
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

  const onSubmit = (values) => {
    const { name, email, subject, message } = values;
    console.log(name, email, subject, message);
    sendEmail();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({
        values,
        errors,
        isValid,
        handleChange,
        handleBlur,
        touched,
        handleReset,
      }) => (
        <form onSubmit={sendEmail} className={style.form}>
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
          <div className={style.mainButton}>
            <MainButton
              label={"Reset"}
              type={"reset"}
              isDisabled={isValid}
              onReset={handleReset}
            />
            <MainButton
              label={"Send Message"}
              type={"submit"}
              isDisabled={isValid}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}
