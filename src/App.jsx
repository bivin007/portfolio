import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Expirence from "./components/Expirence";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
 
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Skill />
        <Expirence />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
 