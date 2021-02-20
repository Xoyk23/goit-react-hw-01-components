import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

import styles from './ProfilePhoto.module.css';

const ProfilePhoto = ({ avatar, description }) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={description} className={styles.avatar} />
    </div>
  );
};

ProfilePhoto.defaultProps = {
  avatar: defaultImage,
};

ProfilePhoto.propTypes = {
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProfilePhoto;
