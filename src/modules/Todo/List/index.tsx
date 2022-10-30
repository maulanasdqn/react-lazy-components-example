import Card from "@components/Common/Card";
import { FC, ReactElement, Suspense } from "react";

const ListTodo: FC = (): ReactElement => {
  return (
    <Suspense fallback={"Memuat Card.."}>
      <Card header={"Todo List"}>
        <h1 className="text-4xl font-sans">Anjayani</h1>
      </Card>
    </Suspense>
  );
};

export default ListTodo;
