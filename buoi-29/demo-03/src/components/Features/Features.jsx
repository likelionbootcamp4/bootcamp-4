import "./Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-container">
          <div data-aos="flip-left">
            <img
              src="/img/illustrations/features.svg"
              alt="Features Illustration"
            />
          </div>
          <div data-aos="zoom-in">
            <div className="feature-content">
              <div className="feature-heading">
                <h2>We Provide Many Features You Can Use</h2>
                <p className="text-md">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>
              </div>
              <ul className="feature-list">
                <li className="feature">
                  <i className="icon icon-check fa-solid fa-circle-check" />
                  <p className="text-sm">Powerfull online protection.</p>
                </li>
                <li className="feature">
                  <i className="icon icon-check fa-solid fa-circle-check" />
                  <p className="text-sm">Internet without borders.</p>
                </li>
                <li className="feature">
                  <i className="icon icon-check fa-solid fa-circle-check" />
                  <p className="text-sm">Supercharged VPN</p>
                </li>
                <li className="feature">
                  <i className="icon icon-check fa-solid fa-circle-check" />
                  <p className="text-sm">No specific time limits.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
