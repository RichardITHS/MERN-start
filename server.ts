//Steg 1
//Importerar paket och skapar variabler för användning lite längre ned
//Importerar express
import express, {Request, Response, json} from 'express'
//Importerar routes "mina rutter"
import carRouter from './routes/carRoutes'

//Importerar mongoose och connect funktionen och använder den med min MongoDB
import {connect} from 'mongoose'
//Skapar en anslutning till MongoDB och jag upprättar en databas
connect('mongodb://localhost:27017/richardc')

//Använder variabeln app för att arbeta med express
const app = express()
//Bestämmer Port
const port = 8000

//Steg 2
//Använda middleware
//Använda json, detta middleware är till för att tolka inkommande förfrågningar
//i json formatet
app.use(json())


//Steg 3
//Handlers (GET, PUT, DELETE, POST etc)
app.get('/', (req:Request, res:Response)=> {
    res.send('Ja detta fungerar')
})


//Steg 4
//Måste lyssna på porten för att servern ska fungera och hantera nätverksförfrågningar
app.listen(port, () => {
    console.log(`Server is running ${port}`)
})
