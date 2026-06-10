import styles from "./About.module.css";
import bivinImg from "../assets/bivin.JPG";
 
export default function About() {
  const stats = [
    { value: "", label: "Years Experience" },
    { value: "", label: "Projects Built" },
    { value: "", label: "Happy Clients" },
  ];
 
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.imageBox}>
            <img src={bivinImg} className={styles.img} alt="Bivin KU" />
            <div className={styles.floatCard}>
              <span className={styles.emoji}>💻</span>
              <div>
                <p className={styles.cardTitle}>Full Stack</p>
                <p className={styles.cardSub}>React · Node · MongoDB</p>
              </div>
            </div>
          </div>
        </div>
 
        <div className={styles.right}>
          <span className={styles.tag}>About Me</span>
          <h2 className={styles.heading}>
            Passionate about building <span className={styles.green}>great things</span>
          </h2>
          <p className={styles.text}>
            Hi, I'm <strong>Bivin KU</strong> — a Full Stack Developer who loves turning
            ideas into fast, scalable web applications. I work across the full spectrum:
            from crafting intuitive React interfaces to engineering solid Node.js backends
            and MongoDB databases.
          </p>
          <p className={styles.text}>
            I believe great software is clean, maintainable, and user-first. When I'm not
            coding, I'm exploring new technologies and contributing to open source.
          </p>
 
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}