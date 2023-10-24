// import { ITodo } from "../types";

// interface ITodoList {
//   todos: ITodo[];
//   extraCss?: string;
// }

// const TodoList: React.FC<ITodoList> = ({ todos, extraCss }) => {
//   return (
//     <ul className={extraCss}>
//       {todos.map((t) => (
//         <li key={t.id.toString()}>{t.text}</li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;
// import React from "react";
// import { ITodo } from "../types";
// interface ITodoList {
//   todos: ITodo[];
//   extraCss?: string;
//   onTodoDelete: (id: number) => void;
// }
// const TodoList: React.FC<ITodoList> = ({ todos, extraCss, onTodoDelete }) => {
//   return (
//     <ul className={extraCss}>
//       {todos.map((t) => (
//         <li key={t.id.toString()}>
//           {t.text}
//           <button onClick={() => onTodoDelete(t.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default TodoList;
// import React from "react";
// import { ITodo } from "../types";
// interface ITodoList {
//   todos: ITodo[];
//   extraCss?: string;
//   onTodoDelete: (id: number) => void;
//   onTodoEdit: (id: number, newText: string) => void;
// }
// const TodoList: React.FC<ITodoList> = ({
//   todos,
//   extraCss,
//   onTodoDelete,
//   onTodoEdit,
// }) => {
//   return (
//     <ul className={extraCss}>
//       {todos.map((t) => (
//         <li key={t.id.toString()}>
//           {t.text}
//           <button onClick={() => onTodoEdit(t.id, "New Text")}>Edit</button>
//           <button onClick={() => onTodoDelete(t.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default TodoList;

import React, { useState } from "react";
import { ITodo } from "../types";
import EditForm from "./EditForm";
interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  onTodoDelete: (id: number) => void;
  onTodoEdit: (id: number, newText: string) => void;
  handleEdit: (id: number) => void;
}
const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  onTodoDelete,
  onTodoEdit,
  handleEdit,
}) => {
  return (
    <ul className={extraCss}>
      {todos.map((t) => (
        <li key={t.id.toString()}>
          {t.isEdit ? (
            <EditForm
              initialText={t.text}
              onEdit={(newText) => {
                onTodoEdit(t.id, newText);
              }}
            />
          ) : (
            <div>
              {t.text}
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => onTodoDelete(t.id)}>Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
