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
  // charge state
  const [charge, setCharge] = useState("");
  // amount state
  const [amount, setAmount] = useState("");
  // edit item
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  //
  //useEffect
  /*--
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
--*/
  //useEffect

  //********************** functionality *******************************/
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false, type, text });
    }, 3000);
  };

  const clearItems = () => {
    //setExpenses([]);
    console.log("clear items");

    handleAlert({
      type: "danger",
      text: "All items are delete",
    });
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
              <ExpenseForm
                charge={charge}
                amount={amount}
                id={id}
                edit={edit}
                setEdit={setEdit}
                setCharge={setCharge}
                setAmount={setAmount}
                handleAlert={handleAlert}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ExpenseList
                handleAlert={handleAlert}
                setCharge={setCharge}
                setAmount={setAmount}
                setEdit={setEdit}
                id={id}
                setId={setId}
                clearItems={clearItems}
              />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
