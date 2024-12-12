import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST=async(request)=>{
   const newUser=await request.json()
   try {
    const db=await connectDB()
    const userCollection=await db.collection('users')
    const existsUser=await userCollection.findOne({email:newUser.email})
    if(existsUser){
        return Response.json({message:"User already exists"},{status:403})
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 14);
    const res=await userCollection.insertOne({...newUser,password:hashPassword})
    return Response.json({message:"User Created"})
    
   } catch (error) {
    console.log("something wrong:",error);
   }
}