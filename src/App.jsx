import { Box, Paper } from "@mui/material"
import Header from "./components/Header"
import TodoAdd from "./components/TodoAdd"
import TodoList from "./components/TodoList"
import { useState } from "react"

function App() {
  const [task, setTask] = useState([])
  function addTask(todo){
    setTask((prevTask) => ([...prevTask, todo]))

  }
  function removeTask(index){
    setTask((prevValue) =>{
      return prevValue.toSpliced(index, 1) 
    })
  }

  return (
    <Box
    sx = {{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
      backgroundColor: "#f5f5f5"
    }}
    >
      <Paper elevation={3} sx={{
        width: "450px",
        textAlign: "center",
        p: 3
      }}>
        <Header />
        <TodoAdd addTask ={addTask} />
        <TodoList task ={task} removeTask={removeTask}/>

      </Paper>

    </Box>
  )
} 

export default App
