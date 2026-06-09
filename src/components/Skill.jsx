import styles from "./Skill.module.css";
 
const skills = [
  { category: "Frontend", items: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"] },
  { category: "Backend",  items: ["Node.js", "Express.js", "firbase"] },
  { category: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
  { category: "Tools",    items: ["Git", "GitHub", "VS Code", "n8n", ""] },
];
 
export default function Skill() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>What I Know</span>
          <h2 className={styles.heading}>
            My <span className={styles.green}>Tech Stack</span>
          </h2>
          <p className={styles.sub}>
            Tools and technologies I use to build end-to-end solutions.
          </p>
        </div>
 
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.tags}>
                {group.items.map((item) => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
