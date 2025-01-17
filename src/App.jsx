import About from "./componets/About";
import BlurBackground from "./componets/BlurBackground";
import Contacts from "./componets/Contacts";
import Experience from "./componets/Experience";
import Hero from "./componets/Hero";
import Navbar from "./componets/NavBar";
import Project from "./componets/Project";
import Testimonial from "./componets/Testimonial";
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
