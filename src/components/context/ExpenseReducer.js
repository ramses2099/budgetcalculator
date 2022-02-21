import { v4 as uuid } from "uuid";
import { actions } from "./Action";

//reducer
const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_EXPENSE_ITEM: {
      const { charge, amount } = action.payload;
      const newExpense = { id: uuid(), charge, amount: parseInt(amount) };
      return [...state, newExpense];
    }
    case actions.EDIT_EXPENSE_ITEM: {
      const { charge, amount } = action.payload;
      const newExpense = { id: uuid(), charge, amount: parseInt(amount) };
      return [...state, newExpense];
    }
    case actions.DELETE_EXPENSE_ITEM: {
      const { id } = action.payload;
      let newState = state.filter((ex) => ex.id !== id);
      return newState;
    }
    case actions.CLEAR_EXPENSE_ITEM: {
      return [];
    }
    default:
      return state;
  }
};

export default ExpenseReducer;
