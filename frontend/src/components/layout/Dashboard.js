import React,{memo} from "react";
import Form from "./Form";
import Todos from "./Todos";

function Dashboard() {
  return (
    <>
        <Form />
        <Todos />
    </>
  );
}


export default memo(Dashboard)

