import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Charge</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {expenses.length > 0 && (
            <button type="button" className="btn btn-primary">
              <span className="btn-label">
                <i className="bi bi-trash"></i>
              </span>
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ExpenseList;
