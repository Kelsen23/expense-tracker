import { useState } from "react";
import { useStore } from "../store";

const ExpenseTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  

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
          <button
            className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;