import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseList = ({ handleAlert, setCharge, setAmount, setEdit, setId }) => {
  //state context
  const { state, deleteExpenseItem, clearExpenseItem, totalAmountExpenseItem } =
    useContext(ExpenseContext);
  const expenses = state;
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
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  deleteExpenseItem={deleteExpenseItem}
                  handleAlert={handleAlert}
                  setCharge={setCharge}
                  setAmount={setAmount}
                  setEdit={setEdit}
                  setId={setId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {expenses.length > 0 && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => clearExpenseItem()}
            >
              <span className="btn-label">
                <i className="bi bi-trash"></i>
              </span>{" "}
              Clear Expenses
            </button>
          )}
        </div>
      </div>
      <div className="row py-4">
        <div className="col">
          <h1 className="text-start">
            Total spending:{totalAmountExpenseItem()}
            <span className="badge bg-danger"></span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ExpenseList;
