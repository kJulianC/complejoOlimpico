import { validateCampus, validatePartialCampus } from '../schemas/campus.js'

export class CampusController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (req, res) => {
    res.json({ message: 'campusController works!!' })
  }
}
