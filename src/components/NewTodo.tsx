import { FormEvent, useRef } from "react";

const NewTodo: React.FC<{ onAddTodo : (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const addTodoFormHandler = (event: FormEvent) => {
        event.preventDefault();

        const newTodoText = todoTextInputRef.current!.value;

        if (newTodoText.trim().length === 0) {
            // Throw an error
            return ;
        }

        props.onAddTodo(newTodoText);
    }

    return (
        <form onSubmit={addTodoFormHandler}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;