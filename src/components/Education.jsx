import styles from "./Education.module.css";
 
const education = [
  {
    degree: "Bachelor of Computer engineering",
    school: "Ramco Institute Of technology",
    year: "2024 – 2028",
    desc: "Focused on software engineering, designing, web development, and database management.",
    grade: "CGPA: 7.5 / 10",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Arunachala Matriculation.hr.sec.school",
    year: "2022 – 2024",
    desc: "Computer Science stream with Mathematics and Physics.",
    grade: "Percentage: 81.5%",
  },
  {
    degree: "Secondary (10th)",
    school: "ST.Josephs Matriculation.hr.sec.school",
    year: "2021 – 2022",
    desc: "Completed with Good marks in Science and English.",
    grade: "Percentage: 81%",
  },
];
 
export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>Academic Background</span>
          <h2 className={styles.heading}>
            My <span className={styles.green}>Education</span>
          </h2>
          <p className={styles.sub}>
            The foundation that shaped my technical thinking and problem-solving approach.
          </p>
        </div>
 
        <div className={styles.timeline}>
          {education.map((edu, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.lineCol}>
                <div className={styles.dot} />
                {i < education.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.school}>🏫 {edu.school}</p>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.year}>{edu.year}</span>
                    <span className={styles.grade}>{edu.grade}</span>
                  </div>
                </div>
                <p className={styles.desc}>{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}