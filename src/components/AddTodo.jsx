import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({onNewItem}){
  const [todoName,setTodoName]=useState("");
  const [todoDate,setTodoDate]=useState("");

  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
    onNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" value={todoName} placeholder="Enter todo here" onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}><BiMessageAdd/></button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;