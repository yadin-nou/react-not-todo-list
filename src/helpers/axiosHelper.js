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
