import { FC, lazy, ReactElement, Suspense } from "react";

const Home: FC = (): ReactElement => {
  const Todo = lazy(() => import("@modules/Todo"));

  return (
    <Suspense fallback={"Loading.."}>
      <Todo />
    </Suspense>
  );
};

export default Home;
