import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon-01.png";
import phone_icon from "../../assets/phone-icon-01.png";
import location_icon from "../../assets/location-icon-01.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0727da79-aa9b-418a-a7f2-f369ccee52f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel Free to to reach out through contact form or find out contact
          information below. Your feedback, questions, and suggestions are
          important to us we strive to provide exeptional services to our
          custmers.
          <ul>
            <li>
              <img src={mail_icon} alt="" />
              raisemanufacturingtradingplc@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="" /> +251938212117
            </li>
            <li>
              <img src={location_icon} alt="" />
              Ethiopia, Addis Ababa, bole brass, K Kare Bldg
            </li>
          </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
