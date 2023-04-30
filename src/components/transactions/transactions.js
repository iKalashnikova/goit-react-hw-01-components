import PropTypes from 'prop-types';
import {
  TransactionHistory,
  TableData,
  TableBody,
  Type,
  MoneyInfo,
} from './transaction.styled';

export const Transactions = ({ items }) => {
  return (
    <TransactionHistory>
      <thead>
        <TableData>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableData>
      </thead>

      <TableBody>
        {items.map(item => (
          <tr key={item.id}>
            <Type>{item.type}</Type>
            <MoneyInfo>{Number(item.amount)}</MoneyInfo>
            <MoneyInfo>{item.currency}</MoneyInfo>
          </tr>
        ))}
      </TableBody>
    </TransactionHistory>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
