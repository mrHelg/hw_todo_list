import {useState} from 'react';

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
    setTaskDone: () => {},
    deleteTask: () => {},
  };
}
