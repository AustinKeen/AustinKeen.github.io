import React from "react";

import styles from "./Hero.module.css";
import oogwayTokenPic from "../../assets/hero/oogwayTokenPic.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Austin</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:KeenAustinR@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={oogwayTokenPic}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};