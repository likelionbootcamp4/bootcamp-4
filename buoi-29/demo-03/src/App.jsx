import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Navbar from "./components/Navbar/Navbar";
import Network from "./components/Network/Network";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <About />
        <Features />
        <Pricing />
        <Network />
        <Testimonials />
        <Help />
      </main>
      <Footer />
    </div>
  );
}
