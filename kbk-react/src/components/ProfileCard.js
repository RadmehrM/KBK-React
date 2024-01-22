import React from "react";
import styles from "./ProfileCard.module.css"; // Updated path to use CSS module

export const ProfileCard = ({ name, title, boardPosition, imageSrc }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.image}>
        <img className={styles.profileImage} alt={name} src={imageSrc} />
      </div>
      <div className={styles.label}>
        <p className={styles.nameTitleBoard}>
          <span className={styles.name}>{name}</span>
          <br />
          <span className={styles.title}>{title}</span>
          <br />
          <span className={styles.board}>{boardPosition}</span>
        </p>
      </div>
    </div>
  );
};
