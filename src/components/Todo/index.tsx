import Form from "./Form";
import List from "./List";
import Toolbar from "./Toolbar";

import * as Styled from "./Todo.styled";

const Todo: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Toolbar />
      <Styled.Content>
        <Form />
        <List />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Todo;
