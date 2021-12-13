import React from 'react';
import NewTaskSection from './NewTaskSection';
import TasksSection from './TasksSection';

const TodoListSection = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <TasksSection />
      <NewTaskSection />
    </div>
  );
}

export default TodoListSection;