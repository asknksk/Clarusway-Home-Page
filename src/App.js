import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/Global";

const theme = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8a1c4a",
  },
  responsive: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
};

export default App;
