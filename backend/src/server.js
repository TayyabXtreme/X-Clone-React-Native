import express from 'express'
import cors from 'cors'
import {clerkMiddleware} from "@clerk/express"

import userRoutes from './routes/user.route.js'


import { ENV } from './config/env.js'
import { connectDB } from './config/db.js'

const app=express()


app.use(cors())
app.use(express.json())

app.use(clerkMiddleware())

app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send("Hello from server")

})


const startServer=async()=>{
    try {
        await connectDB()
        
app.listen(ENV.PORT,()=>{console.log(`server is runnig on ${ENV.PORT}`)})
        
    } catch (error) {
        console.error("Failed to start server",error.message)
        process.exit(1)
    }
}

startServer();