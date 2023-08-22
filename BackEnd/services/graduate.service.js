import Graduate from "../models/graduate.model.js";
// import TestUser from "../models/test.model.js";

export const getUserService = async () => {
    try {
        return await Graduate.findById('64e492014bf1530e7e87f788')
    } catch (e) {
        throw e;
    }
}