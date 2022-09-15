import { EmptyState } from '../emptyState';
import { TaskList } from '../TaskList';
import styles from './render-task.module.css';

interface TaskList {
  id: number;
  title: string;
  isComplete: boolean;
}

interface RenderTaskProps {
  taskList: TaskList[];
  deleteTask: (id: number) => void;
  completedTask: (id: number) => void;
}

export function RenderTask({ taskList, deleteTask, completedTask }: RenderTaskProps) {
  function deleteTaskById(id: number) {
    deleteTask(id);
  }

  function completedTaskById(id: number) {
    completedTask(id);
  }

  const createdTasks = taskList.length

  const completedTasks = taskList.filter(tasks => tasks.isComplete === true).length;

  return (
    <section className="container">
      <div className={styles.renderTaskContainer}>
        <div className={styles.counterTask}>
          <div className={styles.taskCreated}>
            <p>Tarefas criadas</p>
            <div>
              <span>{createdTasks}</span>
            </div>
          </div>
          <div className={styles.taskFinished}>
            <p>Concluídas</p>
            {taskList.length === 0
              ?
                <div>
                  <span>{createdTasks}</span>
                </div>
              :
                <div className={taskList.length ? styles.hasCompletedTask : ''}>
                  <span>{completedTasks} de {createdTasks}</span>
                </div>
            }
          </div>
        </div>
        {taskList.length 
          ? <TaskList 
              renderTaskList={taskList}
              onDeleteTask={deleteTaskById}
              onCompletedTask={completedTaskById}
            />
          : <EmptyState />
        }
      </div>
    </section>
  )
}