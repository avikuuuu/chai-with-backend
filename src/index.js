
import dotenv from 'dotenv'
import ConnectDB from './db/index.js'

dotenv.config({
    path:'./env'
})

ConnectDB()














/*
import express from 'express'
const app=express()
(async()=>{
    try {
         await Mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log('Error connecting to database: ', error)
         })

         app.listen(process.env.PORT || 3000,()=>{
            console.log(`App is listening on ${process.env.PORT}`)

         })

    } catch (error) {
        console.error("ERROR:",error)
        throw error
        
    }
})()

*/
