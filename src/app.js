import express from 'express'
import cors from 'cors'

const server = express()

const usuario = []

const tweet = []

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

    resp.send("OK")
})



