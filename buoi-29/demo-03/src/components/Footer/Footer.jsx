import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-content" data-aos="fade-right">
            <div className="brand">
              <img className="brand-img" src="/img/logo.svg" alt="Logo" />
              <p className="brand-title">
                Lasles<span className="font-bold">VPN</span>
              </p>
            </div>
            <p className="text-md">
              <span className="font-medium">LaslesVPN</span>
              is a private virtual network that has unique features and has high
              security.
            </p>
            <div className="media-icons media-icons-sm">
              <div className="icon-wrapper">
                <i className="icon fa-brands fa-facebook-f" />
              </div>
              <div className="icon-wrapper">
                <i className="icon fa-brands fa-twitter" />
              </div>
              <div className="icon-wrapper">
                <i className="icon fa-brands fa-instagram" />
              </div>
            </div>
            <p className="text-md copyright">©2020LaslesVPN</p>
          </div>
          <div className="footer-links" data-aos="fade-left">
            <div>
              <h5>Product</h5>
              <ul className="text-md">
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Server</a>
                </li>
                <li>
                  <a href="#">Countries</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Engage</h5>
              <ul className="text-md">
                <li>
                  <a href="#">LaslesVPN ?</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Earn Money</h5>
              <ul className="text-md">
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Become Partner</a>
                </li>
              </ul>
            </div>
            <div />
            <div />
          </div>
        </div>
      </div>
    </footer>
  );
}
