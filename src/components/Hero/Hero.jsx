import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Rabina</h1>
      <p className={styles.description}>a recent graduate from Lambton College with a Post-Graduate Certificate in Full Stack Software Development. I am actively seeking entry-level opportunities in the IT industry to apply my skills and grow professionally. Feel free to connect if you'd like to learn more about me!</p>
      <a href="mailto:rabinapanta78@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("me/me.png")} alt="Hero Image of me" className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.buttomBlur} />

  </section>
  );
};
