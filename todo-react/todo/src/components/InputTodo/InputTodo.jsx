import React, { useState } from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./inputTodo.scss";
import { useSnackbar } from 'notistack';

import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const InputTodo = ({addTodo}) => {
  const { enqueueSnackbar } = useSnackbar()

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: `id-${new Date()}`,
    title: "",
    description: "",
    checked: false,
    date: new Date().toLocaleDateString(),
    type: "default"
  });

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;

    setFormData((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  };
  

  const sumbitTodo = (event) => {
    event.preventDefault();
    
    if (!formData.title) {
      enqueueSnackbar("Title is empty", { variant: "error" });
      return;
    }

    if (!formData.description) {
      enqueueSnackbar("Note is empty", { variant: "error" });
      return;
    }

    if(formData.title && formData.description) {
      dispatch(addTodo(formData));

      enqueueSnackbar("Todo has been added", { variant: "success" });

      setFormData({
        id: `id-${new Date()}`,
        title: "",
        description: "",
        date: new Date().toLocaleDateString(),
        checked: false,
        type: "default"
      });
    }
  }
  return (
    <div className="input_todo_block">
      <form>
        <label>
          <input
            type="text"
            name="title"
            className="input_todo"
            placeholder="Заголовок"
            value={formData.title}
            onChange={inputChangeHandler}
          />
        </label>
        <label>
          <textarea
            name="description"
            className="textarea_todo"
            placeholder="Ваша заметка"
            value={formData.description}
            onChange={inputChangeHandler}
          />
        </label>
        <Box sx={{ maxWidth: "50%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              name="type"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.type}
              label="Type"
              onChange={inputChangeHandler}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="important">Important</MenuItem>
              <MenuItem value="warning">Warning</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="save">
          <Button variant="contained" type="sumbit" onClick={sumbitTodo}>
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
