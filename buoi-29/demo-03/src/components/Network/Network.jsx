import "./Network.css";

export default function Network() {
  return (
    <section className="network">
      <div className="container">
        <div className="network-container">
          <div className="section-heading" data-aos="zoom-in-left">
            <h2>Huge Global Network of Fast VPN</h2>
            <p className="text-md">
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </p>
          </div>
          <div className="network-img" data-aos="zoom-in-up">
            <img
              src="/img/illustrations/network.svg"
              alt="Network Illustration"
            />
          </div>
          <div className="network-brand-list" data-aos="fade-up">
            <div className="network-brand">
              <img src="/img/brand/netflix.png" alt="Netflix" />
            </div>
            <div className="network-brand">
              <img src="/img/brand/reddit.png" alt="Reddit" />
            </div>
            <div className="network-brand">
              <img src="/img/brand/amazon.png" alt="Amazon" />
            </div>
            <div className="network-brand">
              <img src="/img/brand/discord.png" alt="Discord" />
            </div>
            <div className="network-brand">
              <img src="/img/brand/spotify.png" alt="Spotify" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
