import React from "react";
import Home from "./Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { GlobalProvider } from "./GlobalContext";
function App() {
  return (
    <>
      <CssBaseline />
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </GlobalProvider>
    </>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#065fd4",
    },
  },
  shape: {
    borderRadius: 2,
  },
});

export default App;
