import "../styles/ContactUs.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

/* TODO
 - Remember to change the form endpoint when the project is complete (client should be the one receiving emails)
*/

function ContactUs() {
  // state variable to display success message
  const [state, handleSubmit] = useForm("xnqepvov");
  if (state.succeeded) {
    return <p>Message sent, thanks!</p>;
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us!</h1>
      <div className="ellipse" id="ellipse-9"></div>
      <div className="kbk-email">
        <span style={{ fontWeight: "600" }}>Email</span>
        <span>kidsbeingkidscharity@gmail.com</span>
      </div>
      <div className="social-media">
        <span>social media</span>
        <img src={require("../images/socials.png")}></img>
      </div>
      <div className="ellipse" id="ellipse-11"></div>
      {/*Form endpoint goes below, will need to replace this with your own*/}
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xnqepvov"
        method="post"
      >
        <div className="form-control first-name">
          <label htmlFor="first-name">First Name</label>
          <input name="firstName" id="first-name" type="text" />
        </div>

        <div className="form-control last-name">
          <label htmlFor="last-name">Last Name</label>
          <input name="lastName" id="last-name" type="text" />
        </div>

        <div className="form-control email">
          <label htmlFor="email">Email *</label>
          <input name="email" id="email" type="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-control message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" type="message"></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button id="submit" type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
      <div className="ellipse" id="ellipse-12"></div>
    </div>
  );
}

export default ContactUs;