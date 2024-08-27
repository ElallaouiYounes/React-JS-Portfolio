import React from 'react';
import './Contact.css';
import email from '../../assets/email.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import instagram from '../../assets/instagram.webp';
import github from '../../assets/github.webp';
import facebook from '../../assets/facebook.avif';
import x from '../../assets/x.jpg';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2b13decd-e459-4a9a-914c-fdcb8a66f5c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        document.querySelector('.submittion').style.display = 'block';
        event.target.reset();
        setTimeout(() => {
          document.querySelector('.submittion').style.display = 'none';
        }, 5000);
      } else {
        console.log("Failed", res);
        document.querySelector('.error-msg').style.display = 'block';
        setTimeout(() => {
          document.querySelector('.error-msg').style.display = 'none';
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Reach out</h1>
        <svg width="180" height="70" viewBox="0 0 150 60" xmlns="http://www.w3.org/2000/svg"> <path d="M0 30 Q30 0 150 15 Q30 60 0 30" fill="rgb(255, 127, 80)" /></svg>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p className='myparagraph'>▪️ I'm open to new opportunities and projects! Feel free to reach out if you have something in mind. I'm always here to discuss how I can help.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="Email" />
              <p>younesselallaoui444@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="Phone" />
              <p>+212 607799800</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" />
              <p>Casablanca, Morocco</p>
            </div>
            <div className="contact-detail">
              <div className="social-links">
                <a href="https://x.com/Youness0607" target="_blank" rel="noopener noreferrer">
                  <img src={x} alt="X" />
                </a>
              </div>
              <div className="social-links">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/youness.elallaoui/?hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/ElallaouiYounes" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/younes-el-allaoui-7b636b2b9/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <div className="contact-item submittion">
            <i class="fa fa-check"></i>
            Email sent successfully.
          </div>
          <div class="contact-item error-msg">
            <i class="fa fa-times-circle"></i>
            Email sending failed.
          </div>
          <div className="contact-item">
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required />
          </div>
          <div className="contact-item">
            <label htmlFor="email">Your email address</label>
            <input type="email" name="email" placeholder='Enter your email' required />
          </div>
          <div className="contact-item">
            <label htmlFor="message">Type your message</label>
            <textarea name="message" placeholder='Enter your message here' required></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit">Submit now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
