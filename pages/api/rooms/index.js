import { allRooms, newRoom } from "../../../controller/roomController";
import nc from "next-connect";
import dbConnect from "../../../congif/dbConnect";
const handler = nc();
dbConnect()
// handler.get(allRooms);
handler.post(newRoom)
export default handler;
