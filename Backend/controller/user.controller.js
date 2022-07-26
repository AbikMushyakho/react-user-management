import Users from "../models/user.model.js";
import bcrypt from "bcrypt";
class UserController {
  register = async (req, res) => {
    try {
      let { username, email, password, address } = req.body;
      password = bcrypt.hashSync(password, 10);
      const find = await Users.findOne({ email: email });
      if (find) throw new Error("User Alerady exists");
      const stored = await Users.create({ username, email, password, address });
      stored
        ? res.status(201).json({
            staus: true,
            message: "User Registered!!!",
          })
        : res.status(401).json({
            status: false,
            message: "User not registered",
          });
    } catch (error) {
      res.status(401).json({
        staus: false,
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const found = await Users.findOne({ email });
      if (!found) throw new Error("Invalid Email or Password!");
      const match = bcrypt.compareSync(password, found.password);
      match
        ? res.status(200).json({
            status: true,
            message: "Login Success!!",
          })
        : res.status(401).json({
            status: false,
            message: "Invalid Email or Password!",
          });
    } catch (error) {
      res.status(401).json({
        status: false,
        message: error.message,
      });
    }
  };
}
const UserControllers = new UserController();
export default UserControllers;
