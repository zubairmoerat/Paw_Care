import { connection as db} from "../config/config.js";
import { hash,compare } from "bcrypt";
import { createToken } from "../middleware/authentication.js";

class Users{
    fetchUsers(req, res) {
        const qry =`
        SELECT userID firstName lastName emailAdd Gender userAge userRole userProfile
        FROM Users;
        `
        db.query(qry,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const qry =`
        SELECT userID firstName lastName emailAdd Gender userAge userRole userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(qry, (err, result)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    async createUser(req, res){
        let data = req.body
        data.userPass = await hash(data?.userPass, 10)
        let user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `
        db.query(qry, [data], (err)=>{
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: "This Account already exists."
                })
            }else {
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: "Your Account has been registered."
                })
            }
        })
    }
    async updateUser(req, res){
        const data = req.body
        if(data?.userPass){
            data.userPass = await hash(data?.userPass, 8)
        }
        const qry = `
        UPDATE Users
        SET ? 
        WHERE userID = ${req.params.id}
        `
        db.query(qry, [data], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "You have successfully updated your Accunt."
            })
        })
    }
    deleteUser(req, res){
        const qry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(qry, [req.body], (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your Account has been deleted."
            })
        })
    }
}