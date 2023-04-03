import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          {/* Text */}
          <div data-aos="fade-right">
            <div>
              <div className="header-text">
                <h1>
                  Want anything to be easy with
                  <span className="font-bold">LaslesVPN.</span>
                </h1>
                <p className="text-md">
                  Provide a network for all your needs with ease and fun using
                  <span className="font-bold">LaslesVPN</span>
                  discover interesting features from us.
                </p>
              </div>
              <button className="btn btn-solid shadow shadow-btn">
                Get Started
              </button>
            </div>
          </div>
          {/* Image */}
          <div data-aos="fade-left">
            <img
              src="/img/illustrations/header.svg"
              alt="Header Illustration"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
