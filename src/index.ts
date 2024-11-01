import express from 'express'
import dotenv from 'dotenv'
import router from './routes/route'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => {
	console.log(`Servidor executando na porta: ${PORT}`)
})