import { Button } from "antd";
import React from "react";
import useTodoStore from "../store";

export const Actions = () => {
  const clearTodos = useTodoStore((state) => state.clearTodos);
  return (
    <div>
      <Button onClick={clearTodos}>Clear all todos</Button>
    </div>
  );
};
