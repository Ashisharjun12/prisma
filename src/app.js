import express from "express"


const app = express()





app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`)
    
})

//define routes





export default app;