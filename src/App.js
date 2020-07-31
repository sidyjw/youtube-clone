import React from "react";
import Home from "./Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
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
});

export default App;
