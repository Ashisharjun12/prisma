import app from "./src/app.js";

const startServer = async()=>{

    const PORT = 3000

    //db connect




    app.get("/", (req, res) => {
        console.log("server is working....");
      });
    
      app.listen(PORT, () => {
        console.log(`server is running at ${PORT}`);
      });



}

startServer()