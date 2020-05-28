const mongo = require('mongoose');

const department = new mongo.Schema({
    department_id: Number,
    department: String
});

module.exports = mongo.model('newDepartment', department);

// const generalSales = new newDepartment({
//     department_id: 1,
//     department: 'General Sales'
// });

// const Electronics = new newDepartment({
//     department_id: 2,
//     department: 'Electronic Sales'
// });

// const Groceries = new newDepartment({
//     department_id: 3,
//     department: 'Produce Sales'
// });

// module.exports = {generalSales,Electronics,Groceries};