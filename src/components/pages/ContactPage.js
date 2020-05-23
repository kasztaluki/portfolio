import React from "react";
import "../../styles/pages/ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact">
      <div>
        <p>Skontaktuj się ze mną</p>
      </div>
      <div>
        <p>
          Zadzwoń:
          <br />
          tel. 791964564
        </p>
      </div>
      <div>
        <p>
          Email:
          <br />
          lukasz.grabowski.pg@gmail.com
        </p>
      </div>
      <div>
        <div>
          <a
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kasztaluki"
          >
            Github
          </a>
        </div>
        <div>
          <a
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/lukaszgrabowskipg"
          >
            Linkedin
          </a>
        </div>
        <div>
          <a aria-label="E-mail" href="mailto:lukasz.grabowski.pg@gmail.com">
            Email
          </a>
        </div>
      </div>
      <div>Formularz kontaktowy</div>
    </div>
  );
};

export default ContactPage;
