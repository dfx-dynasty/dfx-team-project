import axios from "axios";

export const getUserData = async () => {
    try {
        const responseData = await axios.get("http://localhost:3000/response");
        return responseData.data;
    } catch (error) {
        return error;
    }
}