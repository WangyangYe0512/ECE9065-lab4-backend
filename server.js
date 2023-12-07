const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conection to MongoDB
mongoose.connect('mongodb+srv://wye57:ywy135790@bookstore.5uj55aq.mongodb.net/bookstore?retryWrites=true&w=majority');


// Routes
const openRouter = require('./routes/open');
const secureRouter = require('./routes/secure');
const adminRouter = require('./routes/admin');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const reviewRouter = require('./routes/review');
const bookshelfRouter = require('./routes/bookshelf');

app.use('/api/open', openRouter);
app.use('/api/secure', secureRouter);
app.use('/api/admin', adminRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/review', reviewRouter);
app.use('/api/bookshelf', bookshelfRouter);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});