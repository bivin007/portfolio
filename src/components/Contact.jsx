import { useState } from "react";
import styles from "./Contact.module.css";
 
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
 
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to EmailJS or your backend API
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };
 
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.tag}>Get In Touch</span>
          <h2 className={styles.heading}>
            Let's <span className={styles.green}>Work Together</span>
          </h2>
          <p className={styles.text}>
            Have a project in mind or just want to say hi? My inbox is always
            open — I'll get back to you as soon as possible.
          </p>
 
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📧</span>
              <span>bivinkrishna007@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <span>Nagercoil,kanyakumari, India</span>
            </div>
          </div>
 
          <div className={styles.socials}>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className={styles.social}>GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className={styles.social}>LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className={styles.social}>Twitter</a>
          </div>
        </div>
 
        <div className={styles.right}>
          {sent && (
            <div className={styles.successMsg}>
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="your name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="you@example.com"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
              rows={5}
              placeholder="Tell me about your project..."
            />
          </div>
          <button className={styles.btn} onClick={handleSubmit}>
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}