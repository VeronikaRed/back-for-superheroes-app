import {Router} from 'express'
import {getAll, createHero, deleteHero, editHero, getCharacterById} from '../controllers/servers.js'

const router = Router()

router.get('/',getAll)
router.post('/create', createHero)
router.post('/edit', editHero)
router.post('/delete', deleteHero)
router.post('/oneOf', getCharacterById)

export default router