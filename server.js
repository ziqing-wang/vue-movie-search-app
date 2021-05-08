const express = require('express');
const serverStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify')
const app = express();
app.use(enforce.HTTPS({
    trustProtoHeader: true
}));
app.use(history())
app.use(serverStatic(__dirname + '/dist'));

app.listen(process.env.PORT || 5000);