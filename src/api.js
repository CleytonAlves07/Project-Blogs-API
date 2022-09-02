const express = require('express');
const rescue = require('express-rescue');
const routers = require('./routers');

// ...

const app = express();

app.use(express.json());

app.use('/login', rescue(routers.loginRouter));

app.use('/user', rescue(routers.userRouter));

app.use('/categories', rescue(routers.categoryRouter));

app.use('/post', rescue(routers.postRouter));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
