import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

function TodoList() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            todoName={item.name}
            todoDate={item.date}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoList;
