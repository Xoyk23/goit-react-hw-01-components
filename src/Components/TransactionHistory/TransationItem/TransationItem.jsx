import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransationItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.transaction}>{type}</td>
      <td className={styles.transaction}>{amount}</td>
      <td className={styles.transaction}>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
