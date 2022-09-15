import { useState } from 'react'
import './global.css';
import { Header } from './components/header';
import { CreateTask } from './components/createTask';
import { RenderTask } from './components/renderTask';

interface TaskList {
  id: number;
  title: string;
  isComplete: boolean;
}

function App() {
  const [getTasks, setGetTasksList] = useState<TaskList[]>([]);

  function getTaskList(tasks: TaskList) {
    setGetTasksList([...getTasks, tasks])
  }

  function handleDeleteTask(id: number) {
    const activeTasks = getTasks.filter(task => task.id !== id);
    setGetTasksList(activeTasks)
  }

  function handleCompletedTask(id: number) {
    const itemIsCompleted = getTasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete,
    }: task)
    
    setGetTasksList(itemIsCompleted);
  }

  return (
    <div className="App">
      <Header/>
      <CreateTask onGetTaskList={getTaskList}/>
      <RenderTask 
        taskList={getTasks}
        deleteTask={handleDeleteTask}
        completedTask={handleCompletedTask}
      />
    </div>
  )
}

export default App
