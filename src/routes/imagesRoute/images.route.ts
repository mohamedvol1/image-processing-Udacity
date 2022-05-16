import express from 'express';
import { httpGetUpdatedImage } from './images.controller';

const imagesRoute = express.Router();

imagesRoute.get('/images', httpGetUpdatedImage);

export { imagesRoute };
