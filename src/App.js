import React, { useState } from "react";
import BudgetList from "./components/BudgetList";
import BudgetForm from "./components/BudgetForm";
import "./App.css";

const App = () => {
  const [budgets, setBudgets] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#f9f9f9");
  const [exchangeRate, setExchangeRate] = useState(1);

  const addBudget = (budget) => {
    const budgetInRupiah = { ...budget, amount: budget.amount * exchangeRate };
    setBudgets([...budgets, { ...budgetInRupiah, id: Date.now() }]);
  };

  const deleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

  const editBudget = (budget) => {
    setSelectedBudget(budget);
  };

  return (
    <div className="app" style={{ backgroundColor: backgroundColor }}>
      <h1>Finance Tracker</h1>
      <BudgetForm onSubmit={addBudget} selectedBudget={selectedBudget} />
      <BudgetList
        budgets={budgets}
        onDelete={deleteBudget}
        onEdit={editBudget}
        exchangeRate={exchangeRate}
      />
    </div>
  );
};

export default App;
