import MainLayouts from "@layouts/Main";
import { FC, ReactElement } from "react";
import AddTodo from "./Add";
import ListTodo from "./List";

const Todo: FC = (): ReactElement => {
  return (
    <MainLayouts>
      <AddTodo />
      <ListTodo />
    </MainLayouts>
  );
};

export default Todo;
