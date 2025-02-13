import style from "./footer.module.css";

import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={style.top}>
        <div>
          <h4>Contributeur</h4>
          <a
            href="https://www.linkedin.com/in/aur%C3%A9lien-haye-9a899841/"
            target="_blank"
            rel="noreferrer"
          >
            Aurélien
          </a>
        </div>
        <div>
          <h4 className={style.product}>Plateforme</h4>
          <p>Save My Book</p>
        </div>
      </div>
      <div className={style.bottom}>
        <div>
          <h4>CGU</h4>
          <p>
            <a href="/cgu">Voir nos conditions</a>
          </p>
          <h4 className="contact-us">Nous contacter</h4>
          <p>
            <a href="/contact">Page contact</a>
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <FaHome /> Adresse : 123 Rue de la Librairie en folie, Book-ville
          </p>
          <p>
            <FaEnvelope /> Adresse mail : contact@savemybook.com
          </p>
          <p>
            <FaPhone /> Téléphone : +33 1 23 45 67 89
          </p>
        </div>
        <div>
          <p>© Wild Code School 2025</p>
          <div className={style.socialLinks}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
