import { Router } from 'express'

import { CampusController } from '../controllers/campus.js'

export const createCampusRouter = ({ movieModel }) => {
  const campusRouter = Router()
  const campusController = new CampusController({ movieModel })

  campusRouter.get('/', campusController.getAll)
  return campusRouter
}
