import React, { useContext } from "react";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseForm = ({
  charge,
  amount,
  edit,
  setEdit,
  id,
  handleAlert,
  setCharge,
  setAmount,
}) => {
  const { state, addExpenseItem, editExpenseItem } = useContext(ExpenseContext);

  // fuction handler
  const onClick = (e) => {
    if (charge !== "" && amount > 0) {
      if (edit) {
        const newState = state.map((item) => {
          return item.id === id
            ? { id: item.id, charge: charge, amount: parseInt(amount) }
            : item;
        });

        editExpenseItem(newState);

        setEdit(false);

        handleAlert({ type: "success", text: "Item Edited" });
      } else {
        addExpenseItem({ charge, amount });

        handleAlert({ type: "success", text: "Item add" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Charge can't be empty value and amount value has to be bigger tha zero",
      });
    }
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
