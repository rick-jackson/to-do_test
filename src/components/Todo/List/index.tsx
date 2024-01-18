import { useTransition, animated } from "react-spring";

import { tasksAnimationsConfig } from "../../../common/configs/tasksAnimation";
import { getPreparedTasks } from "../../../common/utils/sortedTasks";
import { useAppSelector } from "../../../common/hooks/store";
import ListItem from "../Item";

import * as Styled from "./List.styled";

const List: React.FC = () => {
  const { tasks, filter } = useAppSelector((state) => state.tasks);

  const transitions = useTransition(
    getPreparedTasks(tasks, filter),
    tasksAnimationsConfig
  );

  return (
    <Styled.List component="div">
      {transitions((style, item) => (
        <animated.div style={style} key={item.id}>
          <ListItem {...item} />
        </animated.div>
      ))}
    </Styled.List>
  );
};

export default List;
