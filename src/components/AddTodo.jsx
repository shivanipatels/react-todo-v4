import React, { useContext, useRef, useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo() {

  const {addNewItems}=useContext(TodoItemsContext);
   
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    // console.log(todoName);
    // console.log(dueDate);
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    // console.log(event)
    addNewItems(todoName, dueDate);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleAddButtonClick} className="row todo-row">
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              name=""
              id=""
              placeholder="Enter ToDo Here"
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={dueDateElement}
              name=""
              id=""
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success todo-button">
              <BiMessageAltAdd />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
