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
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Alert />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center">Buget Calculator</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ExpenseForm />
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
              Total spending: $
              {expenses.reduce((acc, curr) => {
                return (acc += curr.amount);
              }, 0)}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
