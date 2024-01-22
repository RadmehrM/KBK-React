import React from 'react';
import { ProfileCard } from './ProfileCard';
import teamMembers from '../data/teams';
import styles from './TeamSection.module.css'; // Updated to use CSS module
import teamribbon from '../images/team/—Pngtree—orange ribbon banner promotion_8525066.png';
import elementImage from '../images/team/69ba5b_a7f63558cebe4f45a9ca4e389eff1c63~mv2.webp';

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.imageContainer}>
        <img
          className={styles.pngtreeorangeRibbon}
          alt="The Team"
          src={teamribbon}
        />
        <p className={styles.headerText}>The Team</p>
      </div>

      {teamMembers.map(member => (
        <ProfileCard
          key={member.id}
          name={member.name}
          title={member.title}
          boardPosition={member.boardPosition}
          imageSrc={member.imageSrc}
        />
      ))}

      <div className={styles.additionalImageContainer}>
        <img className={styles.additionalElement} alt="Decorative element" src={elementImage} />
        <div className={styles.rectangle}></div>
      </div>
    </section>
  );
};

export default TeamSection;
