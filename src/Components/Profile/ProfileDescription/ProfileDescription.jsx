import React from "react";
import PropTypes from "prop-types";

const ProfileDescription = ({ name, tag, location }) => {
  return (
    <div>
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileDescription;
