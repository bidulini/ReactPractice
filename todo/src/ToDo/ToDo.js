import { Grid } from "@mui/material";
import { useState }from 'react';
import CreateTask from "./CreateTask";
import ToDoList from "./ToDoList";
import React from 'react';

export default function ToDo() {
    const [tasks, setTasks] = useState ([
        {
            name: "Uci React",
            description: "Pisi kodove programa.",
            date: "30.08.2022.",
        },
        {
            name: "Odradi trening",
            description: "Idi u teretanu i zavrsi jako!",
            date:"1.9.2022.",
        },
]);
const addTask = (CreateTask) => {
    setTasks([...tasks, CreateTask]);
};
return (
    <Grid container
          rowSpacing={3}>
        <Grid item xs={6}>
            <CreateTask handleAdd={addTask} />
        </Grid>
        <Grid item xs={6}>
            <ToDoList data={tasks}/>
        </Grid>
    </Grid>
);

}