import { connectDB } from "@/lib/connectDB";


export const GET=async()=>{
    const db=await connectDB()
    try {
        const property=await db.collection('properties').find().toArray()
        return Response.json(property)
        
    } catch (error) {
        console.log(error);
    }
}