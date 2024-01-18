import {
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import type { Task } from "../../../types/Task";
import { useAppDispatch } from "../../../common/hooks/store";
import { deleteTask, editTask } from "../../../store/actions/tasksActions";

import * as Styled from "./Item.styled";

const Item: React.FC<Task> = ({ id, text, completed, dateCreated }) => {
  const dispatch = useAppDispatch();

  const handleRemoveTask = () => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = () => {
    dispatch(editTask(id));
  };

  return (
    <Styled.Item
      $completed={completed}
      component="div"
      secondaryAction={
        <IconButton edge="end" onClick={handleRemoveTask}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense onClick={handleToggleTask}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            color="error"
            checked={completed}
            sx={{ color: "#fff" }}
            checkedIcon={<CheckBoxIcon color="error" />}
          />
        </ListItemIcon>
        <ListItemText id={`${id}`} primary={text} />
        <Styled.Date component="span">
          {new Date(dateCreated).toLocaleString().split(",").join("\n")}
        </Styled.Date>
      </ListItemButton>
    </Styled.Item>
  );
};

export default Item;
