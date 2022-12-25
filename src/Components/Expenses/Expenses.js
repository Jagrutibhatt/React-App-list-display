import Card from "../UI/Card";
import "./Expenses.css";
import FilterExpenses from "./FilterExpenses";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onChangeFilterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <FilterExpenses
          selected={filteredYear}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
