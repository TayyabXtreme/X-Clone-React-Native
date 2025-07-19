import { getAuth } from "@clerk/express";

export const protectRoute=async(req,res,next)=>{
    try {
        const { userId } = getAuth(req);
        if(!userId){
            return res.status(401).json({error:"Unauthorized - you must be logged in"})
        }
        next()
    } catch (error) {
        console.error("Authentication error:",error)
        return res.status(500).json({error:"Internal server error"});
    }
}