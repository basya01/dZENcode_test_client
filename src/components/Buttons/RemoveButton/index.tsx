import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import removeIcon from '../../../assets/remove.svg';

import styles from './RemoveButton.module.scss';

const RemoveButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.remove_button, className)}
      onClick={onClick}
      {...props}
    >
      <img
        draggable="false"
        className={styles.remove_button__icon}
        src={removeIcon}
        alt="remove_icon"
        role="button"
      />
    </button>
  );
};

export default RemoveButton;
