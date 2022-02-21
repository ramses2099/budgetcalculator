import React, { useState } from "react";
import "./App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
//import { v4 as uuid } from "uuid";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import { Provider } from "./components/context/ExpenseContext";

/*-
const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1300 },
];
-*/
/*-
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
-*/

function App() {
  //********************** state vlues *********************************/

  // alert state
  const [alert, setAlert] = useState({
    show: false,
    type: "danger",
    text: "prueba",
  });
  // edit item
  const [edit, setEdit] = useState(false);
  /*-
  // id
  const [id, setId] = useState(0);
  //useEffect
  /*--
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
--*/

  //********************** functionality *******************************/

  const total = () => {
    /*--
    let t = expenses.reduce((acc, curr) => {
      return (acc += parseInt(curr.amount));
    }, 0);
    return t.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    --*/
  };

  const handleCharge = (e) => {
    console.log(`charge: ${e.target.value}`);
    //setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    console.log(`amount: ${e.target.value}`);
    //setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false, type, text });
    }, 3000);
  };

  const handleSubmit = (e) => {
    /*--
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        const expense = expenses.map((item) => {
          return item.id === id
            ? { ...item, charge, amount: parseInt(amount) }
            : item;
        });
        setExpenses(expense);
        setEdit(false);

        handleAlert({ type: "success", text: "Item Edited" });
      } else {
        const newExpense = { id: uuid(), charge, amount: parseInt(amount) };
        setExpenses([...expenses, newExpense]);
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
    --*/
  };

  const clearItems = () => {
    //setExpenses([]);
    console.log("clear items");

    handleAlert({
      type: "danger",
      text: "All items are delete",
    });
  };

  const handleEdit = (id) => {
    console.log(`edit item ${id}`);
    /*--
    const expense = expenses.find((item) => item.id === id);

    if (expense !== undefined) {
      let { charge, amount } = expense;
      console.log(`expense ${expense.charge}`);
      console.log(`charge ${charge} amount ${amount}`);
      setCharge(charge);
      setAmount(amount);

      setEdit(true);
      setId(id);
    }
    --*/
  };

  //********************** functionality *******************************/
  return (
    <>
      <Provider>
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
              <ExpenseForm edit={edit} handleAlert={handleAlert} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ExpenseList handleAlert={handleAlert} />
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
      </Provider>
    </>
  );
}

export default App;
