import mongoose from "mongoose";


const bioSchema = new mongoose.Schema({
    headshot: String,
    nationality: String,
    pronouns: String,
    headline: String,
    overview: String,
    socials: {
        youtube: String,
        github: String,
        linkedin: String,
    }
})

const experienceSchema = new mongoose.Schema({
    employer_name: String,
    position: String,
    employer_img: String,
    start_date: String,
    end_date: String,
    description: String
})



const graduateSchema = new mongoose.Schema({
    user_type: String,
    name: {
        firstname: String,
        lastname: String
    },
    bio: bioSchema,
    // experience: [experienceSchema],
})


const Graduate = mongoose.model('Graduate', graduateSchema);

export default Graduate;