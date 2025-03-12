import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

function TodoList({ task, removeTask }) {
  const [completedTasks, setCompletedTasks] = useState({});

  function toggleTask(index) {
    setCompletedTasks((prevTasks) => {
      return {
        ...prevTasks,
        [index]: !prevTasks[index],
      };
    });
  }

  return (
    <List>
      {task.map((item, index) => {
        return (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#fff",
              mb: 1,
              borderRadius: 1,
            }}
          >
            <Checkbox
              checked={!!completedTasks[index]}
              onChange={() => toggleTask(index)}
            />
            <ListItemText
              primary={item}
              sx={{
                textDecoration: completedTasks[index] ? "line-through" : "none",
                color: completedTasks[index] ? "gray" : "black",
              }}
            />
            <IconButton color="error" onClick={() => removeTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TodoList;
