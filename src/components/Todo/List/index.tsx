import { useTransition, animated } from "react-spring";

import { tasksAnimationsConfig } from "../../../common/configs/tasksAnimation";
import { getPreparedTasks } from "../../../common/utils/sortedTasks";
import { useAppSelector } from "../../../common/hooks/store";
import Task from "../Task";

import * as Styled from "./List.styled";

const List: React.FC = () => {
  const { tasks, filter } = useAppSelector((state) => state.tasks);

  const transitions = useTransition(
    getPreparedTasks(tasks, filter),
    tasksAnimationsConfig
  );

  if (!tasks.length) {
    return <Styled.EmptyList>There are no scheduled tasks</Styled.EmptyList>;
  }

  return (
    <Styled.List component="div">
      {transitions((style, task) => (
        <animated.div style={style} key={task.id}>
          <Task {...task} />
        </animated.div>
      ))}
    </Styled.List>
  );
};

export default List;
