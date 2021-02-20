import React from 'react';

import PropTypes from 'prop-types';

import styles from './ProfileSocialStats.module.css';

const ProfileSocialsStats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.itemName}>Followers </span>
        <span className={styles.itemData}>{followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.itemName}>Views </span>
        <span className={styles.itemData}>{views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.itemName}>Likes </span>
        <span className={styles.itemData}>{likes}</span>
      </li>
    </ul>
  );
};

ProfileSocialsStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default ProfileSocialsStats;
