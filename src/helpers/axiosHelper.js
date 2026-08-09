import axios from "axios";

const urlEP = "http://localhost:8000/api/v1/tasks";

export const addTasks = async (data) => {
  try {
    const res = await axios.post(urlEP, data);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTaskLists = async () => {
  try {
    const res = await axios.get(urlEP);
    return res;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
