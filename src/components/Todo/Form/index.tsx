import { FormEvent, useState } from "react";
import { TextField } from "@mui/material";

import { validateText } from "../../../common/utils/validateText";
import { addTask } from "../../../store/actions/tasksActions";
import { useAppDispatch } from "../../../common/hooks/store";

import * as Styled from "./Form.styled";

const Form: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error || !newTaskText) {
      return;
    }
    dispatch(addTask(newTaskText));
    setNewTaskText("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTaskText(value);
    setError(!validateText(value));
  };

  return (
    <Styled.Form onSubmit={handleAddTask}>
      <TextField
        label="Text"
        value={newTaskText}
        onChange={handleInputChange}
        fullWidth
        required
        {...(error && { helperText: "Invalid text" })}
      />
      <Styled.Button variant="outlined" type="submit">
        Add
      </Styled.Button>
    </Styled.Form>
  );
};

export default Form;
