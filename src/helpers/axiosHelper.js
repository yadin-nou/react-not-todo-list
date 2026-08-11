import axios from "axios";

const urlEP = "http://localhost:8000/api/v1/tasks";

const processAPI = async ({ method, data }) => {
  try {
    const res = await axios({
      method,
      url: urlEP,
      data,
    });
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const addTasks = async (data) => {
  const obj = {
    method: "post",
    data,
  };
  return processAPI(obj);
};

export const getTaskLists = async () => {
  const obj = {
    method: "get",
  };
  return processAPI(obj);
};

export const switchTask = async (_id, type) => {
  const obj = {
    method: "patch",
    data: { _id, type },
  };
  return processAPI(obj);
};

export const deleteTask = async (data) => {
  return processAPI(data);
};
