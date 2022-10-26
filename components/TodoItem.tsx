import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import styles from "../styles/TodoItem.module.css";
import React from "react";
import classnames from "classnames";
import useTodoStore from "../store";
import { EditTodo } from "./EditTodo";
interface P {
  id: string;
  title: string;
  done: boolean;
}

const handleClick = (id: string) => {
  const checkTodo = useTodoStore.getState().checkTodo;
  checkTodo(id);
};

export const TodoItem = ({ id, title, done }: P) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  return (
    <div className={styles.itemContainer}>
      <h3>{title}</h3>
      <CheckCircleOutlined
        className={classnames(styles.icon, {
          [styles.checked]: done,
        })}
        onClick={() => handleClick(id)}
      />
      <CloseCircleOutlined
        className={styles.icon}
        onClick={() => removeTodo(id)}
      />
      <EditTodo id={id} />
    </div>
  );
};
