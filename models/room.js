import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    trim: true,
    maxlength: [100, "room name cannot exveed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "please enter price per night"],
    maxlength: [4, "room price cannot exceed 4 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "please enter room description"],
  },
  address: {
    type: String,
    required: [true, "please enter hotel address"],
  },
  guestCapacity: {
    type: Number,
    required: [true, "please enter no of guest"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "please enter No of beds in room"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airCondition: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numOfRivews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter room category"],
    enum: {
      values: ["King", "Singles", "Twins"],
      message: "please select correact category",
    },
  },
  rivews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports=  mongoose.models.Room || mongoose.model("Room", roomSchema);
