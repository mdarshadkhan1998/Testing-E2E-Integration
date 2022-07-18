import React from "react";

const TodoInput = ({ value, handleChange, handleSubmit }) => {
  const submit = (e) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form onSubmit={submit}>
      <input 
        // autoFocus
        type="text" 
        value={value} 
        onChange={handleChange} 
        data-testid="todoinput"
        className="todo-input"
        autoFocus
        id="todoinput"
      />
      <button data-testid='todobutton' type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
