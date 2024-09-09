import React from "react";
import { useState } from "react";
import { initialTasks } from "../utils";
import ListRow from "./ListRow";

import { v4 as uuid } from "uuid";
export const ToDoList = () => {
  const [list, setList] = useState([...initialTasks]);
  const [inputList, setInputList] = useState("");

  const onChangeHandler = (e) => {
    setInputList(e.target.value);
  };

  const OnCLickHandler = () => {
    setList((prev) => {
      return [...prev, { id: uuid(), name: inputList, isDone: false }];
    });

    setInputList("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="ENTER TASK"
        onChange={onChangeHandler}
        value={inputList}
      />
      <button onClick={OnCLickHandler}>ADD</button> <br></br> <br></br>{" "}
      <br></br>
      {list.map((task) => (
        <ListRow task={task} list={list} setList={setList} />
      ))}
    </>
  );
};
