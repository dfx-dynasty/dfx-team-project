import { getUserService } from "../services/graduate.service.js"

export const getUserData = async (req, res) => {
    try {
        const userData = await getUserService()
        res.json(userData)
    } catch (e) {
        res.status(404).send('error retrieving data')
    }
}