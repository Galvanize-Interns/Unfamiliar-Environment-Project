const express = require('express');
const expressGraphQL = require('express-graphql')
const mongo = require('mongoose');
const app = express();
const port = 5000;
const newSchema = require('./MongoRoute')

app.use(express.static('dist'));

mongo.connect('mongodb://localhost:27017/position', {useNewUrlParser: true});

mongo.connection.once('open', () => {
    console.log('connected to db');
});


app.use('/graphql', expressGraphQL({
    schema: newSchema,
    graphiql: true
}))


app.listen(port, () => console.log(`listening from port: ${port}`));