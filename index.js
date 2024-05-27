import express, { json } from 'express'
import { createCampusRouter } from './routes/campus.js'
const app = express()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')

app.use(json())

app.use('/campus', createCampusRouter({ campusModel }))

app.listen(PORT, () => {
  console.log(`Server listen on PORT http://localhost:${PORT}`)
})
