import { useEffect, useState } from "react";
import TodoContext from "./TodoContex";

export function TodoProvider({ children }) {

  const TODOS = 'todos';

  // Guarda os itens em string APENAS
  const savedTodos = localStorage.getItem(TODOS)

  // Se já tiver itens os mostra se não mostra um array vazio, utiliza o parse para ler
  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  // Utiliza o stringify para salvar
  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos))
  }, [todos])

  const addTodo = (formData) => {
    const description = formData.get("description");

    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const removeTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        removeTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
