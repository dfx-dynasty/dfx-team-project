import { getUserData } from "./dataService.js";

export const getData = async ({ setUserData }) => {
    const data = await getUserData();
    if (data?.error) {
        console.log(data.error.message);
        setUserData([]);
        return;
    }
    const { results } = data.response;
    setUserData(results);
}