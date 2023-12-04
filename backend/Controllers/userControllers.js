import User from "../models/UserSchema.js"

export const updateUser = async(req, res) => {
    const id = req.params.id

    try {
        
        const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})

    } catch (err) {
        
    }
}