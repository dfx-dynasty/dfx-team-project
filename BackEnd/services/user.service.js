import TestUser from "../models/test.model.js"

export const getUserService = async () => {
    try {
        return await TestUser.find({})
    } catch (e) {
        throw e;
    }
}