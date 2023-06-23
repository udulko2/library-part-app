import './footer.css'
import iconFacebook from './icon-facebook.svg'
import iconInstagram from './icon-instagram.svg'
import iconVk from './icon-vk.svg'
import iconLinkedin from './icon-linkedin.svg'

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__copyright-notice">
          <span>© 2020-2023 Library. </span>
          <span>Все права защищены.</span>
        </div>
        <div className="footer__social">
          <img className="icon-facebook" src={iconFacebook} alt="facebook" />
          <img className="icon-instagram" src={iconInstagram} alt="instagram" />
          <img className="icon-vk" src={iconVk} alt="vk" />
          <img className="icon-linkedin" src={iconLinkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  </footer>
);
