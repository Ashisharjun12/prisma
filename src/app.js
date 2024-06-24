import express from "express"
import userRouter from "./routes/userRoute.js"


const app = express()





app.use(express.json())
app.use(express.urlencoded({extended:true}))






//define routes
app.use('/api/v1' , userRouter)





export default app;