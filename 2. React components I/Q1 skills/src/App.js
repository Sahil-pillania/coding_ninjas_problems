import "./styles.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
