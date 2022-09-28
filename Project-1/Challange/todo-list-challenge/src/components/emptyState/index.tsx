import emptyState from '../../assets/clipboard.svg';

import styles from './empty-state.module.css';

export function EmptyState() {
  return (
    <div className={styles.emptyStateContainer}>
      <div className={styles.emptyState}>
        <img src={emptyState} alt="Prancheta" />
        <p className={styles.textBold}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
} 