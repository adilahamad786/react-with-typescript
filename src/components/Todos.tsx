import React, { useContext } from "react";
import classes from "./Todos.module.css";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.todos.map((todo) => {
        return (
          <TodoItem
            onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}
            key={todo.id}
            text={todo.text}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
