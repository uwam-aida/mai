import User from "../models/user.js"
import { Compare } from "../utils/bcypt.js"
import { sign } from "../utils/jwt.js"

export const login = async(req,res,next) => {  
    try {
        const { email,password } = req.body
        const user = await  User.findOne({email})
        if(!user){
            res.jsone(
                'there is no such Eamil.'
            )
        }
        const isCollectPassword =  Compare(password,user.password)
        if(!isCollectPassword) return res.json('Incollect Email or password')
        const JWT = await sign({id:user.id})
        res.json({message:'you are successfully logged in.',JWT})
    } catch (error) {
        res.json({message:'INTERNAL SERVER ERROR',error})
    }
 }


export const Signup = async (req,res)=>{
    try {
        const { name, email,password} = req.body
        console.log('before we get an error')
        const emailNotExist = await User.findOne({email : email})
        console.log('we pass an error')
        if(emailNotExist) return res.status(404).json('Email alredy exist')
        const user = await User.create({ name,email,password })
        const Jwt = await sign({id:user.id})
        res.status(200).json({Jwt,user})
    } catch (error) {
        res.status(500).json({message:'INTERNAL SERVER ERROR',error})
    }
}