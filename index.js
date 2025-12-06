import express from "express";
const app =  express();
const port = 8000
app.use(express.json())

app.get("/" ,(req,res) =>{
    // console.log(req.headers);
    //  console.log(req.get("user-agent"));
    // res.set("x-username" , "Hasib");
    // res.header("x-username" , "Hasib");
    res.removeHeader("x-powered-by")
    

    
    res.send("Helo");

});

app.listen(port , () =>{
    console.log(`Server is stated at  ${port }`);
    
})