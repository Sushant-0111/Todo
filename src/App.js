import { useState } from "react";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveTodoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalTodolist = [...todolist, toname];
      setTodolist(finalTodolist);
      alert("Task added successfully");
    } else {
      alert("Task already exist");
      return;
    }
  };

  let list = todolist.map((value, index) => {
    return (
      <TodolistItems
        value={value}
        key={index}
        indexnumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toname" />
        <button>Saves</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function TodolistItems({ value, indexnumber, todolist, setTodolist }) {
  let Delete = () => {
    let leftdata = todolist.filter((v, i) => i !== indexnumber);
    setTodolist(leftdata);
  };
  let [status, setstatus] = useState(false);
  return (
    <li
      className={status ? "comletedtodo" : ""}
      onClick={() => setstatus(!status)}
    >
      {indexnumber + 1} {value} <span onClick={Delete}>&times;</span>
    </li>
  );
}
