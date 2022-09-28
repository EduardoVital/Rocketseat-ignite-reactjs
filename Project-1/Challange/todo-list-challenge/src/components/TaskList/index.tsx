import { Check, Trash } from 'phosphor-react';

import styles from './task-list.module.css';

interface Tasks {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TaskListProps {
  renderTaskList: Tasks[];
  onDeleteTask: (id: number) => void;
  onCompletedTask: (id: number) => void;
}

export function TaskList({ renderTaskList, onDeleteTask, onCompletedTask }: TaskListProps) {
  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  function handleCompletedTask(id: number) {
    onCompletedTask(id);
  }

  return (
    <section className={styles.taskListSection}>
      {renderTaskList.map(task => (
        <div className={styles.taskListContainer} key={task.id}>
          <div>
            <div className={styles.round}>
              <input 
                onClick={() => handleCompletedTask(task.id)} 
                type="checkbox" 
                readOnly 
                id="checkbox"/>
              <label 
                htmlFor="checkbox"> 
                <Check size={14}/> 
              </label>
            </div>
            <p className={task.isComplete ? styles.completed : ''}>{task.title}</p>
            <Trash 
              size={16}
              onClick={() => handleDeleteTask(task.id)}
            />
          </div>
        </div>
      ))}
    </section>
  )
}