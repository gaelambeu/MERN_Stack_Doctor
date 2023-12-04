import User from "../models/UserSchema.js"

export const updateUser = async(req, res) => {
    const id = req.params.id

    try {
        
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            {$set:req.body}, 
            {new:true}
        )

        res.status(200).json({
            success: true, 
            message:"Successfully updated", 
            data: updateUser
        })

    } catch (err) {
        res.status(500).json({
            success: false, 
            message:"Failed to update", 
        })
    }
}