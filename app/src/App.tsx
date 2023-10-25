// import { useState } from "react";

// import { ITodo } from "./types";

// import TodoList from "./components/TodoList";
// import AddTodo from "./components/AddTodo";

// // const myTodo: ITodo = { id: 123, text: "Clean my room" };
// // const myTodoArray: ITodo[] = [];
// // myTodoArray.push({
// //   id: 123,
// //   text: "Wash clothers",
// // });

// function App() {
//   // const [name, setName] = useState("ram");
//   const [todos, setTodos] = useState<ITodo[]>([]);

//   // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//   //   setText(e.target.value)
//   // }

//   function onTodoAdd(str: string) {
//     const obj: ITodo = {
//       text: str,
//       id: new Date().getTime(),
//     };
//     setTodos((prev) => [...prev, obj]);
//   }

//   const AddTo
//   return (
//     <div>
//       <h1>my todos</h1>
//       <AddTodo onTodoAdd={onTodoAdd} />
//       <TodoList todos={todos} extraCss="text-bold" />
//     </div>
//   );
// }
// export default App;

import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { ITodo } from "./types";
import "./App.css";
function App() {
  const [todos, setTodos] = useState<ITodo[]>(getFromLocalStorage());
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);
  function getFromLocalStorage(): ITodo[] {
    const storedData = localStorage.getItem("my-todos");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [];
    }
  }
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const handleTodoAdd = (str: string) => {
    const newTodo: ITodo = {
      text: str,
      id: new Date().getTime(),
      isEdit: false,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleTodoEdit = (id: Number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, text: newText, isEdit: false } : todo
    );
    setTodos(updatedTodos);
  };
  const handleEdit = (id: Number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, isEdit: true } : todo
    );
    setTodos(updatedTodos);
    console.log("testing", updatedTodos);
  };
  const handleTodoDelete = (id: Number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  function handleDone(id: Number, type: string) {
    const updatedItems = [...todos];
    const findindex = updatedItems.findIndex((nt) => nt.id === id);
    if (findindex !== -1) {
      if (type == "done") updatedItems[findindex]["isDone"] = true;
      else updatedItems[findindex]["isDone"] = false;
    }
    setTodos(updatedItems);
  }
  return (
    <div>
      <h1> My Todos</h1>
      <AddTodo onTodoAdd={handleTodoAdd} />
      <TodoList
        todos={todos}
        extraCss="text-bold"
        onTodoDelete={handleTodoDelete}
        onTodoEdit={handleTodoEdit}
        handleEdit={(id) => handleEdit(id)}
        handleDone={handleDone}
      />
    </div>
  );
}
export default App;
