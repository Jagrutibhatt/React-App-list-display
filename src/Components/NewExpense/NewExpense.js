import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startIsEditingHandler = () => {
    setIsEditing(true);
  };
  const endIsEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startIsEditingHandler} className="new-expense">
          Add Expenses
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onCancel={endIsEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
