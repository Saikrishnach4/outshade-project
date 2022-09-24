import express from 'express';
import mongoose from 'mongoose';

import postmessage from '../models/posts.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await postmessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error);
}
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await postmessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        
        console.log(error);
    }
}

export const createPost = async (req, res) => {
    const { nameofpro,price ,quantity } = req.body;
    
    const newPostMessage = new postmessage({ nameofpro, price, quantity });

    try {
        await newPostMessage.save();

        res.status(201).json(postmessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { nameofpro,price,quantity} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { nameofpro,price,quantity , _id: id };

    await postmessage.findByIdAndUpdate(id, updatePost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postmessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
export const getper=async(req,res)=>{
    const { id } = req.params;
    try {
        const post = await postmessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createuser = async (req, res) => {
    const { firstname ,lastname,mail,password } = req.body;

    const newPostMessage = new postmessage({ firstname ,lastname,mail,password })

    try {
        await newPostMessage.save();
        console.log(postmessage)
        res.status(201).json(postmessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateprofile = async (req, res) => {
    const { id } = req.params;
    const { firstname ,lastname,mail,password } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { firstname,lastname,mail,password, _id: id };

    await postmessage.findByIdAndUpdate(id, {...post,_id}, { new: true });

    res.json(updatedPost);
}
export const getusers = async (req, res) => { 
    try {
        const postMessages = await postmessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default router;