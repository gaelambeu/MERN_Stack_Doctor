import jwt from "jsonwebtoken";
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'

export const authenticate = async (req, res, next) => {

    // get token from headers
    const authToken = req.headers.authorization

    // check token is exists
    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success:false, message:'No Token, authorization denied'})
    }

    try {
        console.log(authToken);
        next();
    } catch (err) {
        
    }
}