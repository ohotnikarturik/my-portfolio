import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_MY_USER_ID;
import style from "./SendEmail.module.scss";
import MainButton from "../MainButton";

export default function SendEmail() {
  function sendEmail(e) {
    e.preventDefault();

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

  return (
    <form className={style.form} onSubmit={sendEmail}>
      <label className={style.label}>
        <input
          aria-label="input-1"
          className={style.input}
          type="text"
          placeholder="Name..."
          name="user_name"
        />
      </label>
      <label className={style.label}>
        <input
          aria-label="input-2"
          className={style.input}
          type="text"
          placeholder="Email..."
          name="email"
        />
      </label>
      <label className={style.label}>
        <input
          aria-label="input-3"
          className={style.input}
          type="text"
          placeholder="Subject..."
          name="subject"
        />
      </label>
      <label className={style.label}>
        <textarea
          aria-label="textarea"
          className={style.textarea}
          placeholder="Type message..."
          name="message"
        />
      </label>
      <div className={style.mainButton}>
        <MainButton label={"Reset"} type={"reset"} classModifier />
        <MainButton label={"Send Message"} type={"submit"} input/>
      </div>
    </form>
  );
}
