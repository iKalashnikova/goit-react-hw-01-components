import styled from '@emotion/styled';

export const TransactionHistory = styled.table`
  // width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: auto;
  font-size: 14px;
  border: 1px solid black
`;

export const TableData = styled.tr`
  background-color: #918d8d;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;

`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const Type = styled.th`
  width: 200px;
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  border: 1px solid black;
`;

export const MoneyInfo = styled.td`
width: 100px;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
`;
