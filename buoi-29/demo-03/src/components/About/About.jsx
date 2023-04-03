import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-container shadow" data-aos="fade-up">
          <div className="about-item">
            <div className="about-box">
              <div className="about-content">
                <div className="about-icon">
                  <div className="icon-wrapper">
                    <i className="icon fa-solid fa-user" />
                  </div>
                </div>
                <div className="about-text">
                  <h4>90+</h4>
                  <p className="text-xl">Users</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-item">
            <div className="about-box">
              <div className="about-content">
                <div className="about-icon">
                  <div className="icon-wrapper">
                    <i className="icon fa-solid fa-location-dot" />
                  </div>
                </div>
                <div className="about-text">
                  <h4>30+</h4>
                  <p className="text-xl">Locations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-item">
            <div className="about-box">
              <div className="about-content">
                <div className="about-icon">
                  <div className="icon-wrapper">
                    <i className="icon fa-solid fa-server" />
                  </div>
                </div>
                <div className="about-text">
                  <h4>50+</h4>
                  <p className="text-xl">Servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
