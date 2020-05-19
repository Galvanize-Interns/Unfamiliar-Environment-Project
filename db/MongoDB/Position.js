const mongo = require('mongoose');

const positionSchema = new mongo.Schema({
    position_id: Number,
    title: String,
    department_id: Number,
    description: String,
    salary: String
});

const newPosition = mongo.model('newPosition', positionSchema);

const cashier = new newPosition({
    position_id: 1,
    title: 'cashier',
    department_id: 1,
    description: 'Works the cash registers.',
    salary: '$7.25/hr'
});

const manager = new newPosition({
    position_id: 2,
    title: 'Manager',
    department_id: 1,
    description: 'Manages floor operations.',
    salary: '$15/hr'
});

const customerService = new newPosition({
    position_id: 3,
    title: 'Customer service rep',
    department_id: 1,
    description: 'Works the cash registers at customer service and helps with questions',
    salary: '$7.25/hr'
});

const salesRep = new newPosition({
    position_id: 4,
    title: 'Sales Rep',
    department_id: 2,
    description: 'Electronics floor sales',
    salary: '$7.25/hr'
});

const electronicManager = new newPosition({
    position_id: 5,
    title: 'Electorincs manager',
    department_id: 2,
    description: 'Manages electronics sales rep',
    salary: '$15/hr'
});

const groceriesStocker = new newPosition({
    position_id: 6,
    title: 'Stocker',
    department_id: 3,
    description: 'Stocks the shelves in the grocery department.',
    salary: '$7.25/hr'
});

const  groceriesManager = new newPosition({
    position_id: 7,
    title: 'Groceries Manager',
    department_id: 3,
    description: 'Manages stockers.',
    salary: '$15/hr'
});

module.exports = {cashier, manager, customerService, salesRep, electronicManager, groceriesStocker, groceriesManager};