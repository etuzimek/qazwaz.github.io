import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "./Contact.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <h1 className="contact">Kontakt</h1>
        <form
          className="contact-form"
          action="https://formsubmit.co/edwardtuzimek@gmail.com"
          method="POST"
        >
          <div className="contact-details">
            <input
              type="hidden"
              name="_next"
              value="https://sea-apart.web.app/thankyou.html"
            />
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="text" name="name" placeholder="Imie" required />
            <input type="text" name="email" placeholder="Email" required />
          </div>
          <div>
            <textarea
              rows="5"
              cols="50"
              name="message"
              placeholder="Wiadomosc"
              required
            />
          </div>
          <div>
            <ul className="contact-confirm">
              <li>
                <input type="submit" value="Send Message" />
              </li>
              <li>
                <input type="reset" value="Clear Form" />
              </li>
            </ul>
          </div>
        </form>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Pomoc</h2>
              <Link to="/">Jak dojechac</Link>
              <Link to="/">Na plaze</Link>
              <Link to="/">Molo</Link>
              <Link to="/">Osiedle</Link>
            </div>
            <div className="footer-link-items">
              <h2>Kontakt</h2>
              <Link to="/">Rezerwacja</Link>
              <Link to="/">Pytania</Link>
              <Link to="/">Regulamin</Link>
              <Link to="/">Kontakt</Link>
            </div>
          </div>
        </div>
        <section>
          <div>
            <small className="website-rights">ETUZ @ 2023</small>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
