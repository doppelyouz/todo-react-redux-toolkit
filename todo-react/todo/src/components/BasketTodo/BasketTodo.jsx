import React, { useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { useDispatch } from "react-redux";

import './BasketTodo.scss'

const BasketTodo = ({
  todo,
  title,
  description,
  date,
  checkTodo,
  deleteTodoFromBasket,
  editTodo,
  returnTodo,
  id,
  type,
  checked,
}) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const dispatch = useDispatch();

  const handleSetEditTitle = (event) => {
    setEditTitle(event.target.value);
  };
  const handleSetEditDescription = (event) => {
    setEditDescription(event.target.value);
  };

  let todoStyles = `todo`;
  if (checked) {
    todoStyles += " checked";
  }

  const dispatchDeleting = () => {
    dispatch(deleteTodoFromBasket(id));
  };

  const dispatchChecking = () => {
    dispatch(checkTodo(id));
  };

  const dispatchEditing = (title, description) => {
    dispatch(editTodo({ id, title, description }));
    setEditing((editing) => !editing);
  };
  
  const dispatchReturning = () => {
    dispatch(returnTodo(todo));
  };

  const typeChecker = () => {
    switch (type) {
      case "default":
        break;
      case "important":
        todoStyles += " important";
        break;
      case "warning":
        todoStyles += " warning";
        break;
      default:
        break;
    }
  };

  typeChecker();

  return (
    <div className={todoStyles}>
      {editing ? (
        <>
          <div className="title">
            <label>
              <input
                value={editTitle}
                className="edit_todo"
                onChange={handleSetEditTitle}
              />
            </label>
          </div>
          <div className="note">
            <label>
              <input
                value={editDescription}
                className="edit_todo"
                onChange={handleSetEditDescription}
              />
            </label>
          </div>
          <button onClick={() => dispatchEditing(editTitle, editDescription)}>
            Cохранить
          </button>
        </>
      ) : (
        <>
          <div className="title">{title}</div>
          <div className="note">{description}</div>
          <div className="controlPanel">
          <button onClick={dispatchReturning}>
              <KeyboardReturnIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <button onClick={() => dispatchEditing(title, description)}>
              <EditIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <button onClick={dispatchDeleting}>
              <DeleteIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <button onClick={dispatchChecking}>
              <CheckIcon
                className="icons"
                style={checked ? { backgroundColor: "greenyellow" } : null}
              />
            </button>
            <div className="date">{date}</div>
          </div>
        </>
      )}
    </div>
  );
};
export default BasketTodo;