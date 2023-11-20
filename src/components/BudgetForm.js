import React, { useState, useEffect } from 'react';

const BudgetForm = ({ onSubmit, selectedBudget }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [buttonColor, setButtonColor] = useState('#2ecc71'); // Warna default (hijau)
  const [buttonLabel, setButtonLabel] = useState('Add Budget'); // Label default

  useEffect(() => {
    if (selectedBudget) {
      setDescription(selectedBudget.description);
      setAmount(selectedBudget.amount.toString());
      setButtonLabel('Update'); // Ganti label sesuai keinginan Anda
    } else {
      // Reset form fields when in "Add Budget" mode
      setDescription('');
      setAmount('');
      setButtonLabel('Add Budget'); // Kembalikan label ke mode "Add Budget"
    }
  }, [selectedBudget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onSubmit({ description, amount: parseFloat(amount) });

    // Clear form fields
    setDescription('');
    setAmount('');
    setButtonLabel('Add Budget'); // Setelah submit, kembalikan label ke mode "Add Budget"
  };

  return (
    <form onSubmit={handleSubmit} className="budget-form">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        style={{ backgroundColor: buttonColor, color: '#fff' }}
        onClick={() => {
          setButtonColor('#2ecc71'); // Ganti warna sesuai keinginan Anda
        }}
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default BudgetForm;