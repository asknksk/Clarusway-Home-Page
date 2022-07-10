import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

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
      <Header />
    </ThemeProvider>
  );
};

export default App;
