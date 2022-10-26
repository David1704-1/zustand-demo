import create from "zustand";
import { persist } from "zustand/middleware";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (item: Todo) => void;
  clearTodos: () => void;
  checkTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
}

const useTodoStore = create(
  persist<TodoStore>(
    (set) => {
      return {
        todos: [],
        addTodo: (item: Todo) =>
          set((state) => {
            return {
              todos: [...state.todos, item],
            };
          }),
        clearTodos: () => set({ todos: [] }),
        checkTodo: (id: string) => {
          set((state) => {
            return {
              todos: state.todos.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    done: true,
                  };
                }
                return todo;
              }),
            };
          });
        },
        removeTodo: (id) => {
          set((state) => {
            return {
              todos: state.todos.filter((todo) => {
                return todo.id !== id;
              }),
            };
          });
        },
        editTodo: (id, title) => {
          set((state) => {
            return {
              todos: state.todos.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    title: title,
                  };
                }
                return todo;
              }),
            };
          });
        },
      };
    },
    {
      name: "todos",
      getStorage: () => sessionStorage,
    }
  )
);

export default useTodoStore;
