import { FormEvent, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC = (props) => {
  const TodosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const addTodoFormHandler = (event: FormEvent) => {
    event.preventDefault();

    const newTodoText = todoTextInputRef.current!.value;

    if (newTodoText.trim().length === 0) {
      // Throw an error
      return;
    }

    TodosCtx.addTodo(newTodoText);
  };

  return (
    <form onSubmit={addTodoFormHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
