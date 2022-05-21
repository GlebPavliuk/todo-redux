import "./App.css";
import ToDoList from "./components/ToDoList";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Box, Typography } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Box className="container">
        <Typography variant="h1" className="app-title">
          MY TODO LIST :)
        </Typography>
        <Provider store={store}>
          <ToDoList />
        </Provider>
      </Box>
    );
  }
}

export default App;
