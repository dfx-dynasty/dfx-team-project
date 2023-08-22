import axios from "axios";

export const getUserData = async () => {
  try {
    const responseData = await axios.get("https://dfx-dynasty.onrender.com/getdata");
    return responseData.data;
  } catch (error) {
    return error;
  }
};

// updateBioData
