import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import "./glow.css";

const App = () => {
  return (
    <div>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero/>
        <Project/>
        <About/>
        <Experience/>
        <Testimonial/>
        <Contacts/>
      </main>
    </div>
  );
};

export default App;
