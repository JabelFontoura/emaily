const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
const app = require('express')();
const mongoose = require('mongoose');

mongoose.connect(keys.mongo.uri);

require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);

app.listen(PORT);