import CheckIcon from "@mui/icons-material/Check";

import { useAppSelector } from "../../../common/hooks/store";
import Select from "../../UI/Select";

import * as Styled from "./Toolbar.styled";

const Toolbar: React.FC = () => {
  const { tasks } = useAppSelector((state) => state.tasks);

  return (
    <Styled.Toolbar>
      <Styled.TasksIndicators>
        <Styled.TasksCount>
          <CheckIcon fontSize="small" />
          {tasks.filter((task) => task.completed).length}
        </Styled.TasksCount>
        <Styled.CompletedTasksCount>{tasks.length}</Styled.CompletedTasksCount>
      </Styled.TasksIndicators>
      <Styled.Title variant="h1">TO-DO</Styled.Title>
      <Select />
    </Styled.Toolbar>
  );
};

export default Toolbar;
