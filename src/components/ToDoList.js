import React, { Component } from "react";
import TodoItem from "./ToDoItem";
import "../App.css";
import { connect } from "react-redux";
import { deleteTodo, addTodo } from "../store/actions";
import { Button, Box, TextField } from "@mui/material";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.props.dispatch(deleteTodo(id));
  }

  render() {
    return (
      <Box className="list-container">
        {this.props.todos.map((el) => (
          <TodoItem key={el.id} id={el.id} title={el.title} completed={el.completed} deleteItem={this.deleteItem} />
        ))}
        <Box
          component="ul"
          sx={{
            padding: "10 0",
            listStyle: "none",
            display: "flexbox",
            gap: "30px",
          }}
        >
          <TextField
            type="text"
            inputRef={(todoInput) => {
              this.todoInput = todoInput;
            }}
          />
          <Button
            onClick={() => {
              const newTodo = {
                id: new Date().getMilliseconds(),
                completed: false,
                title: this.todoInput.value,
              };

              this.props.dispatch(addTodo(newTodo));
            }}
          >
            Add New ToDo
          </Button>
        </Box>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(ToDoList);
