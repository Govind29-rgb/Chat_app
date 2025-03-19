import express from "express"
const app=express();

import authRoutes from "./routes/auth.route.js"

app.use('/api/auth',authRoutes)

app.listen(5001,()=>{
      console.log('server is running in the port 5001')
});