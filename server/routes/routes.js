import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost,getper,createuser,updateprofile,getusers } from '../controllers/items.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/', getusers);
router.post('/register', createuser);
router.get("/register",getusers)
router.get('/:id', getPost);
router.patch('/:id', updateprofile);





export default router;