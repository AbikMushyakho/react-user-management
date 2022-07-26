import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    address:String
});

const Users= mongoose.model('users',UserSchema);
export default Users;