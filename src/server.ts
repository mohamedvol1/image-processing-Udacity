// const express = require('express');
import express from 'express';
import { imagesRoute } from './routes/imagesRoute/images.route';
const app = express();
const PORT = 3000;

app.use(imagesRoute);
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

export { app };
