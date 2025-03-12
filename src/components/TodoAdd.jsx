import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";

function TodoAdd({ addTask }) {
    const [task, setTask] = useState("")
    function handleClick(){
        if (task.trim() !== ""){
            addTask(task)
            setTask("")

        }

    }


  return <Box sx={{
    display: "flex",
    gap: 2,
    mb: 3
  }}>
    <TextField 
    fullWidth
    variant="outlined" 
    label="Enter a task"
    onChange={(event)=>setTask(event.target.value)}
    value = {task}
    
    />
    <Button variant="contained" color="primary"
    onClick={handleClick}
    disabled = {task.trim() === ""}
    >Add</Button>

  </Box>;
}

export default TodoAdd;
