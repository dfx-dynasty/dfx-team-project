import axios from "axios";

export const getUserData = async () => {
  try {
    // const responseData = await axios.get("https://dfx-dynasty.onrender.com/getdata");
    const responseData = await axios.get("http://localhost:3001/getdata");
    return responseData.data;
  } catch (error) {
    return error;
  }
};

export const putBioDataService = async Bio => {
  try {
    // const updateBio = await axios.put("https://dfx-dynasty.onrender.com/updatebio", Bio);
    console.log(Bio)
    const updateBio = await axios.put("http://localhost:3001/updatebio", Bio);
    return { Bio: updateBio.data };
  } catch (error) {
    return error;
  }
}
