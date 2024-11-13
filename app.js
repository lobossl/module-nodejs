const db = require("./database")
const express = require("express")
const app = express()

app.get("/:str",(req,res) =>{
        const getStr = req.params.str

        const add = db.add({
                id: 1,
                text: getStr
        })

        if(add){
                res.send(getStr)
        }
        else{
                res.send("error")
        }
})

app.listen(3333)
