import bcrypt from 'bcryptjs'

export const Hash = (password)=>{
   return  bcrypt.hashSync(password)
}

export const Compare = (password,dbPassword)=>{
    return  bcrypt.compareSync(password,dbPassword)
 }