import express from 'express';
import bodyParser from 'body-parser';
import { users } from '../model/model.js';

const userRouter = express.Router()

userRouter.get('/', (req, res)=>{
    try{
        users.fetchUsers(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg:"Failed to retrieve users."
        })
    }
})
userRouter.get('/:id', (req, res)=>{
    try{
        users.fetchUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg:"Failed to retrieve user."
        })
    }
})
userRouter.post('/addUser', bodyParser.json(),(req, res)=>{
    try{
        users.createUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg:"Unable to add a new user."
        })
    }
})
userRouter.patch('/updateUser/:id', bodyParser.json(), (req, res)=>{
    try{
        users.updateUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg:"Try again later."
        })
    }
})
userRouter.delete('/deleteUser/:id', bodyParser.json(), (req, res)=>{
    try{
        users.deleteUser(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg:"Failed to delete user."
        })
    }
})
userRouter.post('/login', bodyParser.json(), (req, res)=>{
    try{
        users.login(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg:"Failed to login"
        })
    }
})
export{
    userRouter,
    express
}