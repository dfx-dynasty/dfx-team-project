import axios from "axios";

export const getUserData = async () => {
  try {
    const responseData = await axios.get("http://localhost:3001/getdata");
    return responseData.data;
  } catch (error) {
    return error;
  }
};
