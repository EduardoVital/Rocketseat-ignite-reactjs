import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

import styles from './create-task.module.css';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface CreateTaskProps {
  onGetTaskList: (tasks: Task) => void;
}

export function CreateTask({ onGetTaskList }: CreateTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask() {
    const randomId = Math.floor(Math.random() *100);
    const newTaskTitle = {
      id: randomId,
      title: newTask,
      isComplete: false,
    }

    if (!newTask) return;

    setNewTask('');
    onGetTaskList(newTaskTitle);
  }

  return (
    <section className="container">
      <div className={styles.createTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTask} 
        />
        <button onClick={handleAddNewTask}>
          <span>
            Criar
          </span>
          <PlusCircle size={16}/>
        </button>
      </div>
    </section>
  )
}