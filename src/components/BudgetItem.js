import React from 'react';
import './BudgetItem.css';

const BudgetItem = ({ budget, onDelete, onEdit, exchangeRate }) => {
  const { id, description, amount } = budget;

  return (
    <div className="budget-item">
      <p>{description}</p>
      <p className="budget-amount">Rp. {amount.toLocaleString()}</p>
      <div className="budget-buttons">
        <button
          className="edit-button"
          onClick={() => onEdit(budget)}
          style={{ fontSize: '14px', padding: '8px 12px', backgroundColor: '#3498db', color: '#fff' }}
        >
          Edit
        </button>
        <button
          className="delete-button"
          onClick={() => onDelete(id)}
          style={{ fontSize: '14px', padding: '8px 12px', backgroundColor: '#e74c3c', color: '#fff' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BudgetItem;