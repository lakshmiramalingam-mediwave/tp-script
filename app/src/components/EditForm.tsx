import React, { useState } from "react";
interface IEditForm {
  initialText: string;
  onEdit: (newText: string) => void;
}
const EditForm: React.FC<IEditForm> = ({ initialText, onEdit }) => {
  const [text, setText] = useState(initialText);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};
export default EditForm;