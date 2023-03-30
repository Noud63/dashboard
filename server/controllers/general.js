import User from "../models/User.js"

export const getUser = async(req, res)=> {  {/* req = params and body, res = info send to the frontend*/}
   try {
          const { id } = req.params
         const user = await User.findById(id) 
         res.status(200).json(user)
   } catch (error) {
       res.status(404).json({message: error.message})
   }
}