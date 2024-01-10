import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/users
router.get('/', skillsCtrl.index)

export { router }
