import React from "react";

const ExpenseForm = ({
  charge,
  amount,
  handleAmount,
  handleCharge,
  handleSubmit,
  edit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
              onChange={handleCharge}
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
              onChange={handleAmount}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col text-center">
            <button
              type="submit"
              className={edit ? "btn btn-danger" : "btn btn-primary"}
            >
              <span className="btn-label">
                <i className="bi bi-send"></i>
              </span>{" "}
              {edit ? "Edit" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
