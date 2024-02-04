import "./ContactUs.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

/* TODO
 - add proper styling to meet visual expectations
 - connect frontend to formspree api to handle contact form submissions
*/

function ContactUs() {
  // state variable to display success message
  const [state, handleSubmit] = useForm("xnqepvov");
  if (state.succeeded) {
    return <p>Message sent, thanks!</p>;
  }

  return (
    <div className="container">
      <h1>Contact Us!</h1>
      <div className="kbk-email">
        <span style={{ "font-weight": "600" }}>Email</span>
        <span>kidsbeingkidscharity@gmail.com</span>
      </div>
      <div className="social-media">
        <span>social media</span>
        <img src={require("../images/ContactUs/socials.png")}></img>
      </div>
      <div className="form">
        {/*Form endpoint goes below, will need to replace this with your own*/}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xnqepvov"
          method="post"
        >
          <label htmlFor="first-name">First Name</label>
          <input name="firstName" id="first-name" type="text" />
          <label htmlFor="last-name">Last Name</label>
          <input name="lastName" id="last-name" type="text" />
          <label htmlFor="email">Email *</label>
          <input name="email" id="email" type="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" type="message"></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
