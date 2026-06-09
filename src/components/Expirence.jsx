import styles from "./Expirence.module.css";
 
const experiences = [
  {
    role: "mern-stack Developer Intern",
    company: "Smark solution",
    type: "Internship",
    year: "June 2026 – july 2026",
    points: [
      "Designed and developed full-stack web applications using the MERN stack.",
      "Created responsive user interfaces with React.js and managed application state efficiently.",
      "Developed REST APIs with Node.js and Express.js and connected them to MongoDB databases..",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance / Self-Employed",
    type: "Freelance",
    year: "Present",
    points: [
      "Developed responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks.",
      
    ],
  },
];
 
export default function Expirence() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>Work History</span>
          <h2 className={styles.heading}>
            My <span className={styles.green}>Experience</span>
          </h2>
          <p className={styles.sub}>
            Roles where I've applied my skills to build real-world products.
          </p>
        </div>
 
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.lineCol}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>
 
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>🏢 {exp.company}</p>
                  </div>
                  <div className={styles.badges}>
                    <span className={styles.typeBadge}>{exp.type}</span>
                    <span className={styles.year}>{exp.year}</span>
                  </div>
                </div>
 
                <ul className={styles.points}>
                  {exp.points.map((p, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.bullet}>▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}