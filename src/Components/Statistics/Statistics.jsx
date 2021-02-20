import React from "react";
import PropTypes from "prop-types";

import StatisticsListItem from "./StatisticsListItem/StatisticsListItem";

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map((stat) => (
          <StatisticsListItem key={stat.id} stat={stat} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
