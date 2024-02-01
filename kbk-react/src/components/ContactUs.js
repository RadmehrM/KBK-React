import "./ContactUs.css";

/* TODO
 - add proper styling to meet visual expectations
 - connect frontend to formspree api to handle contact form submissions
*/

function ContactUs() {
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
        <form action="https://formspree.io/f/{form_id}" method="post">
          <label for="first-name">First Name</label>
          <input name="FirstName" id="first-name" type="text" />
          <label for="last-name">Last Name</label>
          <input name="LastName" id="last-name" type="text" />
          <label for="email">Email *</label>
          <input name="Email" id="email" type="email" required />
          <label for="message">Message</label>
          <textarea name="Message" id="message" type="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
