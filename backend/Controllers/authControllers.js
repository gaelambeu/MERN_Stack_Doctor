import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const register =async(req, res) =>{
    
    const {email, password, name, role, photo, gender} = req.body

    try {
        
        let user = null

        if (role==='patient'){
            user = User.findOne({email})
        }
        
        else if (role==='doctor'){
            user = Doctor.findOne({email})
        }


    } catch (err) {
        
    }
}

export const login =async(req, res) =>{
    try {
        
    } catch (err) {
        
    }
}