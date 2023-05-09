//Denna fil hanterar alla våra olika rutter med våra bilar
//Import express, då vi kommer arbeta routes som ingår i dess bibliotek
import express, {Request, Response} from 'express'

//Router ska användas med Express
const router = express.Router()

//Skapar en handler för routers
router.get('/', (req:Request, res:Response) => {
    res.send('Get Cars')
})

export default router
