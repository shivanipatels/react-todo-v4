import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from '../store/todo-item-store';

function TodoItem({todoName,todoDate,id}) {
  const {deleteItems}=useContext(TodoItemsContext);
  return (
    <div>
      <div className="container">
        <div className="row todo-row">
          <div className="col-6"> {todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button onClick={()=>deleteItems(id)}
            type="button" className="btn btn-danger todo-button">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem