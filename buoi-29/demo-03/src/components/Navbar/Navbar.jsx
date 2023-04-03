import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          {/* Brand */}
          <div className="brand">
            <img className="brand-img" src="/img/logo.svg" alt="Logo" />
            <p className="brand-title">
              Lasles<span className="font-bold">VPN</span>
            </p>
          </div>
          {/* Nav Links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Help
              </a>
            </li>
          </ul>
          {/* Action Buttons */}
          <div className="navbar-action">
            <a href="#" className="btn">
              Sign In
            </a>
            <a href="#" className="btn btn-outline">
              Sign Up
            </a>
          </div>
          {/* Menu button */}
          <div className="navbar-menu">
            <button className="btn">
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
