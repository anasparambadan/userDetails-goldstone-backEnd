import userModel from "../model/userModel.js";
export const createUsers = async (req, res) => {
  const user = req.body;
  try {
    const users = await userModel.insertMany(user);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

export const editUser = async (req,res)=>{
    const {_id} = req.body
    try {
        const user = await userModel.findByIdAndUpdate(_id,{ $set: req.body })
        const users = await userModel.find()
        res.status(200).json(users)
        
    } catch (error) {
        res.status(500).json({message:error.message})
     
        
    }
}

export const getUsers = async (req,res)=>{
    try {
        const users = await userModel.find()
        if(users){
            res.status(200).json(users)
        }
        
    } catch (error) {
        res.status(500).json({message:error.message})
     
        
    }
}


