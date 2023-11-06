import { Router } from 'express'
import { generateProduct } from '../utils.js'
import CustomError from '../services/errors/CustomError.js'
import EErrors from '../services/errors/enums.js'
import { generateProductErrorInfo } from '../services/errors/info.js'

const router = Router()
const products = []
for (let i = 0; i < 100; i++) {
  products.push(generateProduct())
}

router.get('/', (req, res) => {
  res.status(200).send({ stutus: 'succes', payload: products })
})

router.post('/', (req, res) => {
  const { title, price, id, stock } = req.body

  if (typeof price !== 'number' || typeof title !== 'string' || typeof id !== 'number' || typeof stock !== 'number') {
    CustomError.createError({
      name: 'User creation error',
      cause: generateProductErrorInfo({ title, price, id, stock }),
      message: 'Error trying to create user',
      code: EErrors.INVALID_TYPE_ERROR
    })
  }

  products.push({ title, price, id, stock })
  res.status(200).send({ stutus: 'product added', payload: products })
})

export default router
