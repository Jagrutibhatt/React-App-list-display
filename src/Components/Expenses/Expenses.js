import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";
import FilterExpenses from "./FilterExpenses";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onChangeFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensefilter = <p>No Expenses Available</p>;

  if (FilterExpenses > 0) {
    expensefilter = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <FilterExpenses
          selected={filteredYear}
          onChangeFilter={onChangeFilterHandler}
        />
        {expensefilter}
      </Card>
    </div>
  );
};

export default Expenses;
