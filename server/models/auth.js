import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true}, //backend throws an error if no name is typed, this is how required works
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: {type: String },
    tags: {type: [String] },
    joinedOn: {type: Date, default: Date.now },
})

export default mongoose.model("User", userSchema) //name of the model is User and schema is one defined above.