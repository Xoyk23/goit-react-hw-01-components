import React from 'react';
import PropTypes from 'prop-types';

import syles from './StatisticsListItem.module.css';

// функция для случайных цветов колонок

const colorRandomizer = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8);

const StatisticsListItem = ({ stat }) => {
  return (
    <li className={syles.item} style={{ backgroundColor: colorRandomizer() }}>
      <span className={syles.label}>{stat.label} </span>
      <span className={syles.percentage}>{stat.percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  stat: PropTypes.object.isRequired,
};

export default StatisticsListItem;
