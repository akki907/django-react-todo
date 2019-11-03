import axios from "axios";
// import { createMessage, returnErrors } from "./messages";
// import { tokenConfig } from "./auth";

import { GET_TODOS, DELETE_TODO, ADD_TODO } from "./type";
import  { notify } from "react-notify-toast";
const myColor = { background: "#0E1717", text: "#FFFFFF" };

export const __notify__ = res => {
  if (!res) return;
  for (let [key, value] of Object.entries(res)) {
    if (typeof(value) !== 'string' && value.length) {
      value.forEach(i => notify.show(i, "custom", 5000, myColor));
    } else {
      notify.show(value, "custom", 5000, myColor);
    }
  }
};

export const getTodos = () => (dispatch, getState) => {
  axios
    // .get("/api/todos/", tokenConfig(getState))
    .get("/api/todos")
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

// DELETE LEAD
export const deleteTodo = id => (dispatch, getState) => {
  axios
    // .delete(`/api/todos/${id}/`, tokenConfig(getState))
    .delete(`/api/todos/${id}/`)
    .then(res => {
      notify.show("Todo Deleted", "custom", 5000, myColor);
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD LEAD
export const addTodo = todo => (dispatch, getState) => {
  axios
    // .post("/api/todos/", todo, tokenConfig(getState))
    .post("/api/todos/", todo)
    .then(res => {
      notify.show("Todo Added", "custom", 5000, myColor);
      dispatch({
        type: ADD_TODO,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};


