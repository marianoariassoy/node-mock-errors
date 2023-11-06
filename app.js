import express, { json } from 'express'
const app = express()
import productsRoutes from './src/routes/products.routes.js'
import errorHandler from './src/middlewares/errors/index.js'
const PORT = 8080

app.use(express.json())

app.use('/mockingproducts', productsRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto localhost:${PORT}`)
})
