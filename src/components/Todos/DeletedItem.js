import React from 'react';
import styles from './DeletedItem.module.css';
import UndoIcon from '../UI/UndoIcon';

const DeletedItem = (props) => {
  return (
    <div className={styles.deletedItem}>
      <div className={styles.buttonUndo}>
        <UndoIcon />
      </div>
      <div className={styles.deletedItemText}>{props.text}</div>
    </div>
  );
};

export default DeletedItem;
