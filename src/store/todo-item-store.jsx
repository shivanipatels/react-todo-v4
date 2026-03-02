import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteItems: () => {},
});


const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        id: Date.now(),
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.id !== action.payload.id,
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDueDate) => {
    const newItemsAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemsAction);
  };

  const deleteItems = (id) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
