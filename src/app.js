import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
import router from './router';

//Middleware: Incoming requests pass to all these
app.use(cors());
//logs
app.use(morgan('combined'));
//parses incoming requests to json
app.use(bodyParser.json({ type: '*/*' }));
router(app);


const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
