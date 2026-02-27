import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

function TodoList() {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className="items-container">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.name}
            todoDate={item.date}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoList;
