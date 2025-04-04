import { useState } from "react";
import { useStore } from "../store";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const handleAddExpense = () => {
    if (description.trim() === "" || amount === "") return;

    addExpense({
      id: Date.now() * Math.random(),
      description,
      amount,
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Expense Tracker
        </h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Expense Description"
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            placeholder="Amount"
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          />
        </div>

        <div className="flex justify-between">
          <button onClick={handleAddExpense} className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
            Add Expense
          </button>
        </div>

        <ul className="space-y-4 mb-6 mt-5">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center bg-purple-50 p-4 rounded-lg shadow-sm transition-transform hover:scale-105"
            >
              <span className="text-gray-800 font-semibold ">
                {expense.description} : ${expense.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
