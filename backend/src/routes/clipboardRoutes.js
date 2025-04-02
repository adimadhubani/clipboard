import express from 'express'
import { getClip,createClip } from '../controllers/clipboardController.js';

const router=express.Router();

router.post('/',createClip);
router.get('/:code',getClip);

export default router;