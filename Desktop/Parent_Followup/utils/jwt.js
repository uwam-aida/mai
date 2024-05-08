import jwt from 'jsonwebtoken'
import { promisify} from 'util'
export const sign =  async(payload)=>{
    return  await promisify(jwt.sign)(payload,'secret')

}