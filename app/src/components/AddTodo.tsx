// import { useState } from "react";

// // function add(n, o) {
// //     return n + o
// // }

// // add(1,2)

// interface IAddTodo {
//   onTodoAdd: (str: string) => void;
// }

// const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
//   const [text, setText] = useState("");

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     onTodoAdd(text);

//     setText("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//     </form>
//   );
// };

// export default AddTodo;
import { useState } from "react";
interface IAddTodo {
  onTodoAdd: (str: string) => void;
}
const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onTodoAdd(text);
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};
export default AddTodo;