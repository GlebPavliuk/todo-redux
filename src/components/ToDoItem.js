import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../store/actions";
import { Box, ListItem, Button } from "@mui/material";

export default function ToDoItem(props) {
  const dispatch = useDispatch();

  function handleClick(todo) {
    dispatch(changeStatus(todo));
  }

  return (
    <Box component="ul">
      <ListItem onClick={() => handleClick(props)} className={props.completed ? "done" : "undone"}>
        {props.title}
        <Button onClick={() => props.deleteItem(props.id)} className="btn">
          x
        </Button>
      </ListItem>
    </Box>
  );
}
