import { Button, Input } from "antd";
import React, { useState } from "react";
import useTodoStore from "../store";

interface P {
  id: string;
}

export const EditTodo = ({ id }: P) => {
  const [title, setTitle] = useState("");
  const editTodo = useTodoStore((state) => state.editTodo);
  return (
    <div>
      <Input type="text" onChange={(event) => setTitle(event.target.value)} />
      <Button onClick={() => editTodo(id, title)}>Edit Todo</Button>
    </div>
  );
};
