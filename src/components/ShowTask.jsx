import React, { useContext } from "react";

// context
import { TodoContext } from "../contexts/TodoContext";

// component
import TodoCard from "./TodoCard";
import DeleteButton from "./DeleteButton";

function ShowTask() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="relative">
            <TodoCard
              key={todo.id}
              title={todo.title}
              date={todo.createdDate}
              time={todo.createdTime}
            />
            <DeleteButton id={todo.id} />
          </div>
        );
      })}
    </div>
  );
}

export default ShowTask;
