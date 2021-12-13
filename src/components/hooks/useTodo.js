import { useState } from 'react';

export default function useTodo(initValue) {
  const [tasks, setTasks] = useState(initValue);

  return {
    tasks,
    addTask: (task) => {
      const newTask = {
        id: Date.now(),
        body: task.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },

    setTaskDone: (id) => {
      const newTasks = tasks.map((task) => {
        const newTask = { ...task };
        if (newTask.id === id) {
          newTask.isDone = !newTask.isDone;
        }
        return newTask;
      });
      setTasks(newTasks);
    },
    deleteTask: () => {},
  };
}
