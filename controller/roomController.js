import Room from '../models/room'
const allRooms=(req,res)=>{
    res.status(200).json({
        success:true,
        message:'All Rooms'
    })

}
// ..........................new room 
const newRoom=async(req,res)=>{
    try {
        const room =await Room.create(req.body)
        req.status(200).json({
            success:true,
            room
            
        })
    } catch (error) {
        res.status(400).json({
            success:false,
         error:error.message
        })
    }

}
export {
    allRooms,
    newRoom
}