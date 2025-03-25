import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersForSidebar= async(req,res)=>{
     try{
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-passowrd") //dont send the password to the client

        res.status(200).json(filteredUsers)
     }
     catch(error){
        console.error("error in GetUsersForSidebar",error.message);
        res.status(500).json({message:"internal server error"})

     }
}

export const getMessages=async(req,res)=>{
    try{
      const {id:usersToChatId}=req.params;
      const myId=req.user._id //my id

      //return all the messages in which either i am the sender or the other one is the sender and i am the reciever 
      const messages=await Message.find({
         $or: [
            { senderId: myId, receiverId: usersToChatId },
            { senderId: usersToChatId, myId: senderId }
        ]
      })
      res.status(200).json(messages)

    }
    catch(error){
      console.log("Error in message.controller.js",error.message)
      res.status(500).json({messages:"internal server error"})

    }
}

export const sendMessage=async(req,res)=>{
   try {
      const { text, image } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id;
  
      let imageUrl;
      if (image) {
          // Upload base64 image to cloudinary
          const uploadResponse = await cloudinary.uploader.upload(image);
          imageUrl = uploadResponse.secure_url;
      }
  
      const newMessage = new Message({
          senderId,
          receiverId,
          text,
          image: imageUrl,
      });
      await newMessage.save()  //saved to db

      //to do:real time functionality using socket.io

      res.status(201).json(newMessage)
  } catch (error) {
    console.log("error in sendmessage controller",error.message)
    res.status(500).json({message:"internal server error"})
  }
  
}