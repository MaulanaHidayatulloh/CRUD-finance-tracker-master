import React from 'react';
import BudgetItem from './BudgetItem';

const BudgetList = ({ budgets, onDelete, onEdit }) => {
  return (
    <div>
      {budgets.map((budget) => (
        <BudgetItem
          key={budget.id}
          budget={budget}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default BudgetList;