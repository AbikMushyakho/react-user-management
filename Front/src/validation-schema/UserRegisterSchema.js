import {object, string} from "yup";


 const RegisterValidationSchema = object({

    username:string().min(6,"Username should be at least 6 letters!!").max(20).required(),
    email:string().required().email(),
    password:string().min(7).max(30).required(),
    address:string().min(4).max(50).required()

});

const LoginValidationSchema= object({
    email:string().email().required(),
    password:string().min(7).max(30).required()
})
export {RegisterValidationSchema,LoginValidationSchema}