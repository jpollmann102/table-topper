import { Request, Response, NextFunction} from 'express';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const atlasPath = 'https://api.boardgameatlas.com/api/';
const CLIENT_ID = process.env.CLIENT_ID;
const PORT = process.env.PORT;
const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: "GET"
}

app.use(cors(corsOptions));
app.use(express.static("./dist/board-game-site/"));

app.use(async (req:Request, res:Response, next:NextFunction) => {
  if(!req.url.includes("/api"))
  {
    next();
    return;
  }
  if(req.url.includes("/categories") || req.url.includes("/mechanics"))
  {
    req.url += `?client_id=${CLIENT_ID}`;
  }else req.url += `&client_id=${CLIENT_ID}`;
  await axios.get(atlasPath + req.url.substring(5))
    .then((response:any) => {
      res.setHeader('content-type', 'application/json');
      res.send(response.data);
    })
    .catch((error:any) => {
      console.error(error);
    })
    .finally(() => {
      next();
    });
});

app.get('/', (req:Request, res:Response) => {
  res.sendFile('index.html', {root: 'dist/board-game-site/'})
});

// start the Express server
app.listen(PORT, () => {
  console.log(`server started on ${ PORT }`);
});
