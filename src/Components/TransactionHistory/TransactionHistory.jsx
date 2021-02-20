import React from "react";
import PropTypes from "prop-types";

import TransactionItem from "./TransationItem/TransationItem";

const TransationHistory = ({ items }) => {
  return (
    <table>
      <thead className="Заглушка">
        <tr>
          <th className="Заглушка">Type</th>
          <th className="Заглушка">Amount</th>
          <th className="Заглушка">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
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
