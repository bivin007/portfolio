import styles from "./Project.module.css";
 
const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack shopping app with cart, auth, payments, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", ""],
    link: "#",
    color: "#dcfce7",
  },
  
  {
    title: "Portfolio Website",
    desc: "Clean, responsive developer portfolio with smooth animations and contact form.",
    tags: ["React", "CSS Modules", "Vite"],
    link: "#",
    color: "#fef9c3",
  },

];
 
export default function Project() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>My Work</span>
          <h2 className={styles.heading}>
            Featured <span className={styles.green}>Projects</span>
          </h2>
          <p className={styles.sub}>
            A selection of things I've built — edit these with your real projects!
          </p>
        </div>
 
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <div
                className={styles.cardTop}
                style={{ background: p.color }}
              >
                <span className={styles.projectIcon}>🚀</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <div className={styles.cardTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag2}>{t}</span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}