import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { TodoItem, TodoInput, Actions } from "../components";
import useTodoStore from "../store";

const Home: NextPage = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div className={styles.container}>
      <h1>Todos Application</h1>
      <>
        {todos.map(({ id, ...rest }) => (
          <TodoItem key={id} id={id} {...rest} />
        ))}
      </>
      <TodoInput />
      <Actions />
    </div>
  );
};
export default Home;
