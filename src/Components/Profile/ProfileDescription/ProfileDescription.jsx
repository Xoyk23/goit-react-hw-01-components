import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfileDescription.module.css';

const ProfileDescription = ({ name, tag, location }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileDescription;
