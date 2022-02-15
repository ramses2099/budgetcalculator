import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <tr>
      <td>{expense.charge}</td>
      <td>
        {expense.amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td></td>
    </tr>
  );
};

export default ExpenseItem;
