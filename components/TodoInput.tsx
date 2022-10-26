import React, { useState } from "react";
import styles from "../styles/TodoInput.module.css";
import { Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import useTodoStore from "../store";
import { v4 as uuid } from "uuid";

export const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [title, setTitle] = useState("");
  const handleAddClick = () => {
    addTodo({
      id: uuid(),
      done: false,
      title: title,
    });
  };
  return (
    <div className={styles.inputContainer}>
      <Input
        type="text"
        className={styles.input}
        onChange={(event) => setTitle(event.target.value)}
      />
      <PlusCircleOutlined className={styles.icon} onClick={handleAddClick} />
    </div>
  );
};
