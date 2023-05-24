import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
            
        },
        gender: {
            type: String,
            required: true
        },
        id:{
            type:Number,
            required:true
        }
        
    },
    { timestamps: true }
)

const userModel = mongoose.model("users", userSchema)
export default userModel