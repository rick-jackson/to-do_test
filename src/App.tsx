import { Provider } from "react-redux";
import Todo from "./components/Todo";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import { setupStore } from "./store";
const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledComponentProvider theme={theme}>
          <Todo />
        </StyledComponentProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
