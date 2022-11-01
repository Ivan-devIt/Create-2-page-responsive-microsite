import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./routers/AppRouters";
import GlobalStyle from "./styles/globalStyles";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
        <AppRouter />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
