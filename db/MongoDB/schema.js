const mongo = require('mongoose');

const db = mongo.connection

// establish connection to mongoDB locally
mongo.connect('mongodb://localhost:27017/position', {useNewUrlParser: true});

db.once("open" ,() => {
    console.log('were connected');
});

//import schemas here
const {cashier, manager, customerService, salesRep, electronicManager, groceriesStocker, groceriesManager} = require('./Position');
const {generalSales,Electronics,Groceries} = require('./Department');

//save schemas to DB

// Position table
cashier.save((err,cashier) => {
    if(err) console.error(err);
    console.log('cashier saved')
});

manager.save((err,manager) => {
    if(err) console.error(err);
    console.log('manager saved')
});

customerService.save((err, customerService) => {
    if(err) console.error(err);
    console.log('customerService saved')
});

salesRep.save((err,salesRep) => {
    if(err) console.error(err);
    console.log('salesRep saved');
});

electronicManager.save((err,electronicManager) => {
    if(err) console.error(err);
    console.log('electornic manager saved');
});

groceriesStocker.save((err,groceriesStocker) => {
    if(err) console.error(err);
    console.log('stocker saved');
});

groceriesManager.save((err,groceriesManager) => {
    if(err) console.error(err);
    console.log('groceries manager saved')
});

// Department Table
generalSales.save((err, generalSales) => {
    if(err) console.error(err);
    console.log('general Sales saved')
});

Electronics.save((err,Electronics) => {
    if(err) console.error(err);
    console.log('electronics saved');
});

Groceries.save((err,Groceries) => {
    if(err)console.error(err);
    console.log('groceries saved');
});

