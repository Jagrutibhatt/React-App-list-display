import React from "react";
import "./FilterExpenses.css";

const FilterExpenses = (props) => {
  const onChangeFilterHandler = (event) => {
    console.log(event.target.value + "FilterExpenses.js");
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter by Year</label>
        <select
          name=""
          id=""
          value={props.selected}
          onChange={onChangeFilterHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpenses;
