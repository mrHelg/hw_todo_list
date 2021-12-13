import React from 'react';
import useTodo from './../../hooks/useTodo';
import CloseIcon from '@mui/icons-material/Close';
import styles from './TaskSection.module.scss';

const TasksSection = () => {
  const { tasks, deleteTask, setTaskDone } = useTodo([
    {
      id: Date.now() + 1,
      body: 'visit a doctor',
      isDone: true,
    },
    {
      id: Date.now() + 2,
      body: 'make the dishes',
      isDone: false,
    },
  ]);

  const handleCheckbox = ({ target }) => {
    setTaskDone(Number(target.value));
  };

  return (
    <div className={styles.container}>
      <h2>Tasks</h2>
      {tasks.map((task) => {
        // console.log(task.id);
        return (
          <div className={styles.task} key={task.id}>
            <input type="checkbox" value={task.id} onChange={handleCheckbox} 
            checked={task.isDone && 'checked'}
            
            />
            <p className={styles.taskBody}>{task.body}</p>
            <CloseIcon sx={{ color: 'red' }} />
          </div>
        );
      })}
    </div>
  );
};

export default TasksSection;
