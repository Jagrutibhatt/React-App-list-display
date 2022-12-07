import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
};

export default Expenses;
