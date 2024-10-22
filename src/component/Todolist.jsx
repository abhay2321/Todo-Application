import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoData } from "./TodoData";
import { TodoDate } from "./TodoDate";
import { getLocalStoTodoData, setLocalStoTodoData } from "./LocalStorage";
 
export const Todolist = () => {
   //Todo: tasks to add new object to the TodoList  
  const [tasks, setTasks] = useState(getLocalStoTodoData());// we pass the get storageData
  
  const handleFormSubmit = (inputValue) => {
    // it is a object
    const { id, content, checked } = inputValue;

    //To check the input field is empty or not
    if (!content) return;

    //To check if the data is already existing or not
    //if (tasks.includes(inputValue)) return;
    const ifTodoContMatch = tasks.find(
      (curTasks) => curTasks.content === content
    );
    if (ifTodoContMatch) return;

    //sprade operator:- to save the previous data and add the new value at last
    setTasks((prevTask) => [
      ...prevTask,
      // if the key & value are the same in JS object, you can use shorthand proparty names to write them only once
      { id, content, checked }]);
    };

    
  //Todo: Add data to localStorage
    setLocalStoTodoData(tasks);//to pass the task

  //Todod: To delete the object from the TodoList
  const handleDeleteItem = (value) => {
    const updatedTasks = tasks.filter((curTasks) => curTasks.content !== value);
    setTasks(updatedTasks);
  };

  //Todo: To clear all the object from the TodoList
  const handleClearAllItem = () => {
     setTasks([]);
  };

  //todo handleCheckTodo functionality
  const handleCheckTodo = (content) => {
    const updatedTasks = tasks.map((curTasks) => {
      if (curTasks.content === content) {
        return { ...curTasks, checked: !curTasks.checked };
      } else {
        return curTasks;
      }
    });
    setTasks(updatedTasks);
  };
  
 return (
   <section className="todo-container">

         <header>
           <h1>To Do List</h1>
           <TodoDate />
         </header>
   
                         {/* use as a props */}
         <TodoForm onAddTodo={handleFormSubmit} />
   
         <section className="myUnOrdList">
         <ul>
             {tasks.map((curTasks) => (
               <TodoData
                 key={curTasks.id}
                 data={curTasks.content}
                 checked={curTasks.checked}
                 handleCheckTodo={handleCheckTodo} // Correctly passing the function
                 onHandleDeleteTodo={handleDeleteItem}
               />
             ))}
           </ul>
         </section>

       <section>
          <button className="clear-btn" onClick={handleClearAllItem}>
            Clear All
          </button>
       </section>
  </section>

  );
};
