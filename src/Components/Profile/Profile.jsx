import React from "react";
import PropTypes from "prop-types";

import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileSocialsStats from "./ProfileSocialStats/ProfileSocialStats";

const Profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;

  return (
    <div>
      <ProfilePhoto avatar={avatar} description={name} />
      <ProfileDescription name={name} tag={tag} location={location} />
      <ProfileSocialsStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
