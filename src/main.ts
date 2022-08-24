import express from 'express';

import * as HelloWorld from './hello-world';


const app = express();


app.get('/', (req, res) => {
    res.send(HelloWorld.get());
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listenging on PORT ${port}`));
