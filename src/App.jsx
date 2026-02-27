import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import TodoItemsContextProvider from "./store/todo-item-store.jsx";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoList></TodoList>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
