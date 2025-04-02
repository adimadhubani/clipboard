
import Clipboard from "../models/Clipboard.js"

import {nanoid} from "nanoid"

export const createClip=async (req,res)=>{
    try {
        const {content}=req.body;

        if(!content){
            return res.status(400).json({ message: 'Content is required' });
        }
        const code=nanoid(6);
        const clip=new Clipboard({
            code,
            content
        });
       await clip.save();
       res.status(201).json({ code });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getClip=async (req,res)=>{
    try {
        const {code}=req.params;

        const clip = await Clipboard.findOne({ code });

        if(!clip){
            return res.status(404).json({ message: 'Clip not found' });
        }

        res.json({ content: clip.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}