import express from 'express'
import cors from 'cors'

const server = express()

const usuario = []

const tweet = []

let avatar = ""

server.use(express.json())

server.use(cors())

server.listen(5000, () => {
    console.log('Servidor funfou')
})

server.post("/sign-up",(req,resp)=>{

    const infos = req.body

    const id = (usuario.length + 1)

    infos.id = id

    usuario.push(infos)

    avatar = infos.avatar

    resp.send("OK")
})


server.post("/tweets", (req, res) =>{
    const infos = req.body
    const id = (tweet.length + 1)
    
    infos.id = id

    if(!usuario.find((item)=> item.username === infos.username)) {
        res.send("UNAUTHORIZED")
    }

    tweet.push({avatar,infos})

    res.send(tweet)

})



