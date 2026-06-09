import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = [
    { label: "Home",       id: "home" },
    { label: "About",      id: "about" },
    { label: "Education",  id: "education" },
    { label: "Skills",     id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects",   id: "projects" },
    { label: "Contact",    id: "contact" },
  ];
 
  const handleNav = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <span className={styles.logoDot}>B</span>ivin
      </div>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {links.map((l) => (
          <li key={l.id}>
            <button onClick={() => handleNav(l.id)} className={styles.navLink}>
              {l.label}
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
 