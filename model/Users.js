import { connection as db} from "../config/config.js";
import { hash,compare } from "bcrypt";
import { createToken } from "../middleware/authentication.js";

class Users{
    fetchUsers(req, res) {
        const qry =`
        SELECT userID firstName lastName emailAdd Gender userAge userRole 
        `
    }
}