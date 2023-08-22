import { getUserData, putBioDataService } from "./dataService.js";

export const getData = async () => {
  const data = await getUserData();
  if (data?.error) {
    return data.error.message;
  }
  return data;
};

export const putBioDataHandler = async Bio => {
  const data = await putBioDataService(Bio);
  if (data?.error) {
    return data.error.message;
  }
  return data;
}
