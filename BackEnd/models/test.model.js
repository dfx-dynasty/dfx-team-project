import mongoose from "mongoose";

const testSchema = mongoose.Schema({
    testString: { type: String, required: true }
})

const TestUser = mongoose.model('TestUser', testSchema);

export default TestUser;