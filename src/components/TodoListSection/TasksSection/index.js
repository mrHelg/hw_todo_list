import React from 'react';
import useTodo from './../../hooks/useTodo';
import CloseIcon from '@mui/icons-material/Close';

const TasksSection = () => {
  const { tasks, deleteTask, setTaskDone } = useTodo([
    {
      id: Date.now(),
      body: 'visit a doctor',
      isDone: false,
    },
    {
      id: Date.now(),
      body: 'make the dishes',
      isDone: false,
    },
  ]);

  // console.log(tasks);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <input type="checkbox" checked={task.isDone} />
            <p>{task.body}</p>
            <CloseIcon />
          </div>
        );
      })}
    </div>
  );
};

export default TasksSection;
