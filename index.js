import express from 'express';
import router from './routes/servers.js'
import cors from 'cors'

const PORT = 3001
const app = express();

app.use(express.json({extended: true}))
app.use(cors())
app.use(router)
app.listen(PORT)


