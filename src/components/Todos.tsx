import React from "react";
import Todo from "../modals/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map(item => {
            return <TodoItem onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} key={item.id} text={item.text} />
        })}
    </ul>
};

export default Todos;