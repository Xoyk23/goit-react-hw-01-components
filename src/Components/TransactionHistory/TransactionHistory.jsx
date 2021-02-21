import React from 'react';
import PropTypes from 'prop-types';

import TransactionItem from './TransationItem/TransationItem';

import styles from './TransactionHistory.module.css';

const TransationHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.transation}>Type</th>
          <th className={styles.transation}>Amount</th>
          <th className={styles.transation}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.array.isRequired,
};

export default TransationHistory;
