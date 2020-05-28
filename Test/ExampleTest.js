
const tester = require('graphql-tester').tester

describe('A query from graphql', () => {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: 'http://localhost:5000/graphql',
            contentType: 'application/json'
        })
    })
    it('Should recive books', done => {
        self
            .test(
                JSON.stringify({
                    query: 'query { books { name }}'
                })
            )
            .then(res => {
                let success = ""
                for(let i = 0; i < res.data.books.length; i++){
                    if(res.data.books[i].name === "Harry Potter and the Chamber of Secrets"){
                        success = res.data.books[i].name
                    }
                }
                expect(success).toBe("Harry Potter and the Chamber of Secrets")
                done()
            })
            .catch(err => {
                expect(err).toBe(null)
                done()
            })
    })
})

