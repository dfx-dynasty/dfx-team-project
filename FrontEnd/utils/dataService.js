import axios from "axios";

export const getUserData = async () => {
  try {
    const responseData = await axios.get("https://dfx-dynasty.onrender.com/getdata");
    return responseData.data;
  } catch (error) {
    return error;
  }
};

export const putBioDataService = async Bio => {
  try {
    const updateBio = await axios.put("https://dfx-dynasty.onrender.com/updatebio", Bio);
    return { Bio: updateBio.data };
  } catch (error) {
    return error;
  }
}
