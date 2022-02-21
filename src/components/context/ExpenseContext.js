import React, { useReducer, createContext } from "react";
import { v4 as uuid } from "uuid";
import ExpenseReducer from "./ExpenseReducer";
import { actions } from "./Action";

const ExpenseContext = createContext();

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1300 },
];

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenseReducer, initialExpenses);

  const value = {
    state,
    addExpenseItem: (expense) => {
      dispatch({
        type: actions.ADD_EXPENSE_ITEM,
        payload: { id: uuid(), charge: expense.charge, amount: expense.amount },
      });
    },
    editExpenseItem: (expense) => {
      dispatch({
        type: actions.ADD_EXPENSE_ITEM,
        payload: { id: uuid(), charge: expense.charge, amount: expense.amount },
      });
    },
    deleteExpenseItem: (id) => {
      dispatch({
        type: actions.DELETE_EXPENSE_ITEM,
        payload: { id: id },
      });
    },
    clearExpenseItem: () => {
      dispatch({
        type: actions.CLEAR_EXPENSE_ITEM,
        payload: [],
      });
    },
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export { ExpenseContext, Provider };
