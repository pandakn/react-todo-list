import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoContext } from "../contexts/TodoContext";

function DeleteButton({ id }) {
  const { removeTodo } = useContext(TodoContext);

  return (
    <div>
      <button
        onClick={() => removeTodo(id)}
        className="absolute top-12 right-0 -translate-x-1/2 -translate-y-1/2"
      >
        <MdDeleteForever size="3rem" color="#E64848" />
      </button>
    </div>
  );
}

export default DeleteButton;
