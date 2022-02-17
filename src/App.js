import React, { useState } from "react";
import "./App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { v4 as uuid } from "uuid";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1300 },
];

function App() {
  //********************** state vlues *********************************/
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // charge state
  const [charge, setCharge] = useState("");
  // amount state
  const [amount, setAmount] = useState("");
  // alert state
  const [alert, setAlert] = useState({
    show: false,
    type: "danger",
    text: "prueba",
  });

  //********************** functionality *******************************/

  const total = () => {
    let t = expenses.reduce((acc, curr) => {
      return (acc += parseInt(curr.amount));
    }, 0);
    return t.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleCharge = (e) => {
    console.log(`charge: ${e.target.value}`);
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    console.log(`amount: ${e.target.value}`);
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false, type, text });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: uuid(), charge, amount: parseInt(amount) };
      setExpenses([...expenses, newExpense]);
      handleAlert({ type: "success", text: "Item add" });
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Field Charge and Amount are required",
      });
    }
  };
  //********************** functionality *******************************/
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {alert.show && <Alert type={alert.type} text={alert.text} />}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center">Buget Calculator</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ExpenseForm
              charge={charge}
              amount={amount}
              handleAmount={handleAmount}
              handleCharge={handleCharge}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ExpenseList expenses={expenses} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-start">
              Total spending:
              <span className="badge bg-danger">{total()}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
