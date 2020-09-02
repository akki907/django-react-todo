import axios from "axios";
import {
  GET_TODOS,
  DELETE_TODO,
  ADD_TODO,
  GET_TODO,
  GET_CATEGORIES,
  ADD_CATEGORIE,
} from "./types";
import { __notify__, sendNotification } from "../utility/Helper";

export const getTodos = () => (dispatch, getState) => {
  axios
    .get("/api/todos/")
    .then((res) => {
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

/**
 * @description get the list of category
 */
export const getCategories = () => (dispatch, getState) => {
  axios
    .get("/api/categories/")
    .then((res) => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

export const deleteTodo = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/todos/${id}/`)
    .then((res) => {
      sendNotification("Todo Deleted");
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
    })
    .catch((err) => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

export const getTodoById = (id) => (dispatch, getState) => {
  axios
    .get(`/api/todos/${id}/`)
    .then((res) => {
      dispatch({
        type: GET_TODO,
        payload: res.data,
      });
    })
    .catch((err) =>{
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

export const addTodo = (todo) => (dispatch, getState) => {
  axios
    .post("/api/todos/", todo)
    .then((res) => {
      sendNotification("Todo Added");
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

/**@description add the category
 * @method post
 * @param {object}
 */
export const addCategory = (category) => (dispatch, getState) => {
  axios
    .post("/api/categories/", category)
    .then((res) => {
      sendNotification("Category Added");
      dispatch({
        type: ADD_CATEGORIE,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

export const updateTodo = (todo, history) => (dispatch, getState) => {
  axios
    .patch(`/api/todos/${todo.id}/`, todo)
    .then((res) => {
      sendNotification("Todo Updated");
      if (history) history.push("/");
    })
    .catch((err) => {
      if (err.response.data) {
        __notify__(err.response.data);
      }
    });
};

export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
