import "dotenv/config"

import  Jwt  from "jsonwebtoken";
const {sign, verify} = Jwt

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

function verifyToken(req, res, next){
    const token = req?.headers['Authorization']
    if(token){
        if(verify(token, process.env.SECRET_KEY)){
            next()
        }else{
            res?.json({
                status: res.statusCode,
                msg: "Access Denied, Incorrect information was provided."
            })
        }
    }else{
        res?.json({
            status: res.statusCode,
            msg: "Please Log In."
        })
    }
}

export{
    createToken,
    verifyToken
}