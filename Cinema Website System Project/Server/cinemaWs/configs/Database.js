const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/usesrDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});