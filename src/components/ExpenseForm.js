import React, { useContext, useState } from "react";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseForm = ({ edit, handleAlert }) => {
  const { addExpenseItem } = useContext(ExpenseContext);
  // charge state
  const [charge, setCharge] = useState("");
  // amount state
  const [amount, setAmount] = useState("");
  // fuction handler
  const onClick = (e) => {
    addExpenseItem({ charge, amount });
    setCharge("");
    setAmount("");
    handleAlert({ type: "success", text: "Item add" });
  };

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="txtcharge" className="form-label fw-bold">
            Charge
          </label>
          <input
            type="text"
            className="form-control"
            id="txtcharge"
            placeholder="e.g rent"
            value={charge}
            onChange={(e) => {
              setCharge(e.target.value);
            }}
          />
        </div>
        <div className="col-6">
          <label htmlFor="txtamount" className="form-label fw-bold">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="txtamount"
            placeholder="e.g 100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col text-center">
          <button
            className={edit ? "btn btn-danger" : "btn btn-primary"}
            onClick={() => onClick()}
          >
            <span className="btn-label">
              <i className="bi bi-send"></i>
            </span>{" "}
            {edit ? "Edit" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
