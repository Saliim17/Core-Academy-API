const express = require("express"),
    userRoutes = require('./routes/userRoutes'),
    app = express();
  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', userRoutes); 

module.exports = app;