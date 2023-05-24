import express from 'express'
import { createUsers, editUser, getUsers } from '../controller/userController.js'
import { exportCsv } from '../controller/exportCSV.js'
const router = express.Router()

router.post('/create', createUsers)
router.put('/edit/', editUser)
router.get('/',getUsers)
router.post('/exportCsv',exportCsv)

export default router