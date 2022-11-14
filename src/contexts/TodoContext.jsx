import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const onAddTodo = (newTodo) => {
    setTodos((prevTodo) => {
      return [newTodo, ...prevTodo];
    });
  };

  const removeTodo = (id) => {
    // console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, onAddTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
