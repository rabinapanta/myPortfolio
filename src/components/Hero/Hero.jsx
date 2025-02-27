import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Rabina</h1>
      <p className={styles.description}>I'm a fresh Graduate from Lambton College with my Post-Graduate Degree in Full Stack Software Development. I'm actively looking for an entry-level IT roles to start my career. Reach out if you'd like to learn more!</p>
      <a href="mailto:rabinapanta78@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/me.jpg")} alt="Hero Image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.buttomBlur} />

  </section>
  );
};
