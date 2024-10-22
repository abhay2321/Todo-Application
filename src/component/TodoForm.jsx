/* eslint-disable react/prop-types */

import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  // useState for enter the input
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id: value, content: value, checked: false});
  };

  //Child to parent called
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    //to empty the value
    setInputValue({id: "", content: "", checked: false});
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            placeholder="Enter the items"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
