import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div data-testid="todolist">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" data-testid="todocheckbox" value={todo.isCompleted} />
          <span>{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
