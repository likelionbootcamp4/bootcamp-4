import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Home />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
