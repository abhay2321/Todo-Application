/* eslint-disable react/prop-types */
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoData = ({
  data,
  checked,
  handleCheckTodo, // Make sure this prop is named correctly
  onHandleDeleteTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => handleCheckTodo(data)}>
        <IoMdCheckmarkCircleOutline />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
