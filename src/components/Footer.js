import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/swaraj-pawar-webdev" className="footer-social-icon" target="_blank">
              <img src={navIcon1} className="bx"/>
            </a>
            <a href="https://github.com/Swaraj-23" className="footer-social-icon" target="_blank">
              <img src={navIcon2} className="bx"/>
            </a>
            <a href="https://leetcode.com/swaraj_pawar_7/" className="footer-social-icon" target="_blank">
              <img src={navIcon3} className="bx"/>
            </a>
          </div>

          <span className="footer-copy">&copy;  2025 Swaraj Pawar. All rights reserved.</span>
          
          </div>
      </footer>
    </div>
  );
}

export default Footer;
