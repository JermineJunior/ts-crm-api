const mongoose = require('mongoose');
import { MongoClient } from 'mongodb'
const body = require('body-parser')
const express = require('express')
const router = require('./routes/customers')

const port = process.env.PORT || 8080


async function start() {
  try {
    const app = express();
    // const mongo = await MongoClient.connect('mongodb://localhost:27017/crm-api');
    // await mongo.connect();
    const mongo = await mongoose.connect('mongodb://localhost:27017/crm-api');
    mongoose.connection.on('error', (error: Error) => console.log(error));
    app.db = mongo.db;

    app.use(body.json({
      limit: '500kb'
    }));

    // routes
    app.use('/api/customers', router);
    //boot up the server
    app.listen(port, () => console.log(`app is running on http://localhost:${port}`))
  } catch (error) {
    console.log(error)
  }
}
start();