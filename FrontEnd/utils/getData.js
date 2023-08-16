import { getUserData } from "./dataService.js";

export const getData = async () => {
    const data = await getUserData();
    if (data?.error) {
        return data.error.message;
    }
    return data;

}