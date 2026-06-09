import styles from "./Home.module.css";
import bivinImg from "../assets/bivin.jpg";
 
export default function Home() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.gridOverlay} />
      </div>
 
      <div className={styles.content}>
        <span className={styles.badge}>👋 Available for work</span>
        <h1 className={styles.name}>
          Bivin <span className={styles.accent}>KU</span>
        </h1>
        <p className={styles.role}>Full Stack Developer</p>
        <p className={styles.tagline}>
          I craft clean, performant web experiences — from pixel-perfect UIs
          to robust backends.
        </p>
        <div className={styles.actions}>
          <button className={styles.primary} onClick={() => scrollTo("projects")}>
            View Projects
          </button>
          <button className={styles.secondary} onClick={() => scrollTo("contact")}>
            Let's Talk
          </button>
        </div>
      </div>
 
      <div className={styles.imageWrap}>
        <img src={bivinImg} className={styles.photo} alt="Bivin KU" />
        <div className={styles.imageBadge}>
          <span className={styles.dot} />
          Open to opportunities
        </div>
      </div>
    </section>
  );
}
