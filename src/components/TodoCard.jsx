import React from "react";

function TodoCard({ title, date, time }) {
  return (
    <div className="bg-gray-50-200 mb-4 bg-white/40 shadow-xl px-4 py-2 rounded-xl w-3/4 sm:w-96">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-00 mb-2">
        {title}
      </h1>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-600">{time}</p>
    </div>
  );
}

export default TodoCard;
