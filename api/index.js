import express from 'express';
import bodyParser from 'body-parser';
import menuRoutes from './routes/menuRoutes.js';

const app = express();
app.use(bodyParser.json());

// Mount menu routes
app.use('/', menuRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

