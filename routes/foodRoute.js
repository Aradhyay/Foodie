import express from 'express';
import { addFood } from '../controllers/foodController';
import multer from 'multer';

const foodRouter=express.Router();

foodRouter.post("/add")




export default foodRouter;