import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./defaultImage.jpg";

const ProfilePhoto = ({ avatar, description }) => {
  return (
    <div>
      <img src={avatar} alt={description} />
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
