import React from "react";
import PropTypes from "prop-types";

const StatisticsListItem = ({ stat }) => {
  return (
    <li className="item">
      <span className="label">{stat.label} </span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  stat: PropTypes.object.isRequired,
};

export default StatisticsListItem;
