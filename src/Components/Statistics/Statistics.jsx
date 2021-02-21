import React from 'react';
import PropTypes from 'prop-types';

import StatisticsListItem from './StatisticsListItem/StatisticsListItem';

import styles from './Statistics.module.css';

const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map(stat => (
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
