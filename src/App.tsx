import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledComponentProvider } from "styled-components";

import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { setupStore } from "./store";
import theme from "./theme";

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledComponentProvider theme={theme}>
          <Todo />
          <Footer />
        </StyledComponentProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
