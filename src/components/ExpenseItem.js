import React from "react";

const ExpenseItem = ({
  expense,
  deleteExpenseItem,
  handleAlert,
  setCharge,
  setAmount,
  setEdit,
  setId,
}) => {
  const { id, charge, amount } = expense;

  const handleEdit = (id) => {
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  const handleDelete = (id) => {
    deleteExpenseItem(id);
    console.log(`delete item ${id}`);
    handleAlert({
      type: "danger",
      text: "Item delete",
    });
  };

  return (
    <tr>
      <td>{charge}</td>
      <td>
        {amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td>
        <div className="row">
          <div className="col-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleEdit(id)}
            >
              <span className="btn-label">
                <i className="bi bi-pen"></i>
              </span>
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(id)}
            >
              <span className="btn-label">
                <i className="bi bi-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseItem;
