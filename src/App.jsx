import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
  const initialTodoItems=[
    {
      name:"Buy Milk",
      dueDate:"4/10/2023"
    },
    {
      name:"Go To College",
      dueDate:"4/10/2023"
    },
  ];

  const [todoItems, setTodoItems]=useState(initialTodoItems);

  const handleNewItem=(itemName, itemDueDate)=>{
    console.log(`New Item Added: ${itemName} Date: ${itemDate}`);
    const newTodoItems=[...todoItems, {name:itemName,
    dueDate:itemDueDate}];
    setTodoItems(newTodoItems);
  };

  return <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
    <TodoItems todoItems={todoItems}/>
  </center>
}

export default App
