import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  // const ExpenseDate = new Date(2022, 3, 28);
  // const ExpenseTitle = "Car Insurance";
  // const ExpenseAmount = "294.67";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItems;
