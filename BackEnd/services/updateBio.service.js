import Graduate from "../models/graduate.model.js"

export const updateBioService = async (bioToUpdate, id) => {
    const updatedBio = { ...bioToUpdate };
    delete updatedBio._id;
    try {
        return await Graduate.findByIdAndUpdate({ _id: bioToUpdate._id.$oid }, updatedBio)
    } catch (e) {
        console.log(e);
    }
}


// { "_id": { "$oid": "64e492014bf1530e7e87f788" }, "user_type": "graduate", "bio": { "firstname": "John", "lastname": "Doe", "headshot": "https://ds.static.rtbf.be/article/image/1920x1080/1/5/e/4e5046fc8d6a97d18a5f54beaed54dea-1681747291.jpg", "nationality": "British", "pronouns": "he/him", "headline": "Software Engineer - Maths Graduate - Python Programmer - Full Stack Dev - Speaks Spanish", "overview": "Lorem ipsum etc etc etc blah blah blah....", "socials": { "youtube": "https://youtu.be/WIx4srqU3BE", "github": "https://github.com/dfx-dynasty", "linkedin": "https://www.linkedin.com/company/digital-futures2021/mycompany/" } } }