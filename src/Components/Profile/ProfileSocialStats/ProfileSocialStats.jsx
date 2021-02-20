import React from "react";

import PropTypes from "prop-types";

const ProfileSocialsStats = ({ followers, views, likes }) => {
  return (
    <ul>
      <li>
        <span>Followers </span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views </span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes </span>
        <span>{likes}</span>
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