import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
// context
import { TodoContext } from "../contexts/TodoContext";

const d = new Date();
const currentDate = d.toDateString();
const currentTime = d.toLocaleTimeString();

function CreateTodo() {
  const { onAddTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const saveTodo = (e) => {
    e.preventDefault();
    
    if (title.length === 0) {
      // alert("pls type todo something")
      return;
    }

    const data = {
      id: uuidv4(),
      title: title,
      createdDate: currentDate,
      createdTime: currentTime,
    }
    onAddTodo(data);
    setTitle("")
  }

  return (
    <div className="mb-4 w-full">
      <form onSubmit={saveTodo} className="flex justify-center flex-col sm:flex-row gap-2 items-center" >
        <input className="text-lg sm:text-xl p-2 rounded-xl outline-none" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="type todo..." />
        <button className="whitespace-nowrap bg-[#958bb4] rounded-md px-4 py-2 text-white font-bold">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default CreateTodo;
