
const todoKey = "tasks";

//Todo: To store gate to the localStorage
export const getLocalStoTodoData = () => {
    const rawTodo = localStorage.getItem(todoKey);
        if(!rawTodo) return [];
        return JSON.parse(rawTodo);
  }
  
  //Todo: Add data to localStorage
  export const setLocalStoTodoData = (tasks) => {
   return localStorage.setItem(todoKey, JSON.stringify(tasks));
  }
  