import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing-container">
          <div className="section-heading" data-aos="zoom-in-right">
            <h2>Choose Your Plan</h2>
            <p className="text-md">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-item" data-aos="fade-right">
              <div className="pricing-content">
                <div className="pricing-header">
                  <img
                    className="pricing-img"
                    src="/img/illustrations/pricing.svg"
                    alt="Pricing Illustration"
                  />
                  <h5>Free Plan</h5>
                </div>
                <ul className="pricing-body">
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Unlimited Bandwitch</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Encrypted Connection</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">No Traffic Logs</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Works on All Devices</p>
                  </li>
                </ul>
                <div className="pricing-footer">
                  <h4>Free</h4>
                  <button className="btn btn-outline btn-full">Select</button>
                </div>
              </div>
            </div>
            <div className="pricing-item" data-aos="fade-up">
              <div className="pricing-content">
                <div className="pricing-header">
                  <img
                    className="pricing-img"
                    src="/img/illustrations/pricing.svg"
                    alt="Pricing Illustration"
                  />
                  <h5>Free Plan</h5>
                </div>
                <ul className="pricing-body">
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Unlimited Bandwitch</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Encrypted Connection</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">No Traffic Logs</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Works on All Devices</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Connect Anyware</p>
                  </li>
                </ul>
                <div className="pricing-footer">
                  <h4>Free</h4>
                  <button className="btn btn-outline btn-full">Select</button>
                </div>
              </div>
            </div>
            <div className="pricing-item" data-aos="fade-left">
              <div className="pricing-content">
                <div className="pricing-header">
                  <img
                    className="pricing-img"
                    src="/img/illustrations/pricing.svg"
                    alt="Pricing Illustration"
                  />
                  <h5>Free Plan</h5>
                </div>
                <ul className="pricing-body">
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Unlimited Bandwitch</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Encrypted Connection</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">No Traffic Logs</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Works on All Devices</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Connect Anyware</p>
                  </li>
                  <li className="pricing-feature">
                    <i className="icon icon-check fa-solid fa-check" />
                    <p className="text-sm">Get New Features</p>
                  </li>
                </ul>
                <div className="pricing-footer">
                  <h4>Free</h4>
                  <button className="btn btn-outline btn-full">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
