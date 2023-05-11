const http = require("http");
const express = require("express");
const app = express();
const middleware = require("./middleware");
const routes = require("./routes");
const notFoundHandler = require("./notfound");
const PORT = 8000 || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.use(middleware);
app.use(routes);
app.use(notFoundHandler);