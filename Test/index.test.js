const tester = require('graphql-tester').tester

// MySql Test Cases
// Query for all employee names
describe("graphql employee query that grabs names", () => {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: 'http://localhost:5000/graphql',
            contentType: 'application/json'
        })
    })
    it('Should grab the names of all empolyees', done => {
        self
        .test(
            JSON.stringify({
                query: 'query { employee { first_name last_name }}'
            })
        )
        .then(res => {
            let results = res.data.employee
            expect(results).toBe([
                {first_name:"Rodney", last_name:"Spears", start_date:"5/2020", city:'Austin', state:"Texas", position_id:1},
                {first_name:"Shaun", last_name:"Carr", start_date:"5/2020", city:'Austin', state:"Texas", position_id:1},
                {first_name:"Franky", last_name:"Leyva", start_date:"5/2020", city:'Austin', state:"Texas", position_id:1},
                {first_name:"Poli", last_name:"Gonzalez", start_date:"5/2020", city:'Austin', state:"Texas", position_id:1},
                {first_name:"Marco", last_name:"Ailiage", start_date:"5/2020", city:'Austin', state:"Texas", position_id:1}
            ])
            done()
        })
        .catch(err => {
            expect(err).toBe(null)
            done()
        })
    })
})
// Query for first names and start dates for all employees 
describe("graphql employee query that grabs first names and start dates", () => {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: 'http://localhost:5000/graphql',
            contentType: 'application/json'
        })
    })
    it('Should grab the first names and their start dates of all employess', done => {
        self
        .test(
            JSON.stringify({
                query: 'query { employee { first_name start_date }}'
            })
        )
        .then(res => {
            let results = res.data.employee
            expect(results).toBe([
                {first_name:"Rodney",start_date:"5/2020"},
                {first_name:"Shaun",start_date:"5/2020"},
                {first_name:"Franky",start_date:"5/2020"},
                {first_name:"Poli",start_date:"5/2020"},
                {first_name:"Marco",start_date:"5/2020"}
            ])
            done()
        })
        .catch(err => {
            expect(err).toBe(null)
            done()
        })
    })
})
// Query for first first names and their position id
describe("graphql employee query that grabs first names along with there postion ID", () => {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: 'http://localhost:5000/graphql',
            contentType: 'application/json'
        })
    })
    it('Should grab the first name and position ids of all employees', done => {
        self
        .test(
            JSON.stringify({
                query: 'query { employee { first_name position_id }}'
            })
        )
        .then(res => {
            let results = res.data.employee
            expect(results).toBe([
                {first_name:"Rodney",position_id:1},
                {first_name:"Shaun",position_id:1},
                {first_name:"Franky",position_id:1},
                {first_name:"Poli",position_id:1},
                {first_name:"Marco",position_id:1}
            ])
            done()
        })
        .catch(err => {
            expect(err).toBe(null)
            done()
        })
    })
})
// Query for a single employee but return all there info.
describe("graphql employee query that grabs all the info of a individual employee by name", () => {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: 'http://localhost:5000/graphql',
            contentType: 'application/json'
        })
    })
    it('Should grab the names of all empolyees', done => {
        self
        .test(
            JSON.stringify({
                query: 'query { employee(name: "Poli") { first_name last_name start_date city state position_id }}'
            })
        )
        .then(res => {
            let results = res.data.employee
            expect(results).toBe([{first_name:"Poli", last_name:"Gonzalez", start_date:"5/2020", city:'Austin', state:"Texas", position_id:1}])
            done()
        })
        .catch(err => {
            expect(err).toBe(null)
            done()
        })
    })
})
