import express from "express";
const app =  express();
const port = 8000
app.use(express.json())

app.get("/" ,(req,res) =>{
    res.send("Helo");

});

app.listen(port , () =>{
    console.log(`Server is stated at  ${port }`);
    
})