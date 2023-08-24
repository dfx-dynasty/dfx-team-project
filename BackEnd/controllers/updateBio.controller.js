import { updateBioService } from "../services/updateBio.service.js";

export const updateBioControl = async (req, res) => {

    try {
        await updateBioService(req.body, req.params)

        res.status(201).send('Update Success!!!')
    } catch (e) {
        res.status(500).send("failure:")
    }
}