import Button from "@components/Common/Button";
import Card from "@components/Common/Card";
import TextField from "@components/Common/TextField";
import { FC, ReactElement, Suspense, useState } from "react";

const AddTodo: FC = (): ReactElement => {
  const [value, setValue] = useState("");
  return (
    <Suspense fallback={"Memuat Input.."}>
      <Card header={"Input todo list"}>
        <TextField
          type={"text"}
          className={
            "border-blue-400 border-2 rounded-lg text-blue-400 placeholder:font-medium placeholder:text-blue-400"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"Masukkan kegiatan anda hari ini"}
        />
        <Button
          onClick={() => setValue("babi")}
          children={"Submit"}
          className="bg-blue-400 p-3 text-white rounded-lg"
        />
      </Card>
    </Suspense>
  );
};

export default AddTodo;
