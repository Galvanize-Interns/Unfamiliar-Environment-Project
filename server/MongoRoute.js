const newPosition = require('../db/MongoDB/Position');
const newDepartment = require('../db/MongoDB/Department')
const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const position = new GraphQLObjectType({
    name: 'newPosition',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        department_id: {
            type: GraphQLID
        },
        description: {
            type: GraphQLString
        },
        salary: {
            type: GraphQLString
        }
    })
})

const department = new GraphQLObjectType({
    name: 'newDepartment',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        department: {
            type: GraphQLString
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        position: {
            type: position,
            args: {
                id: {
                    type: GraphQLID
                },
                resolve: (parent,args) => {
                    return position.findById(args.id)
                }
            },
        },
        positions: {
            type: new GraphQLList(position),
            resolve: (parent,args) => {
                return position.find({})
            }
        },
        department: {
            type: department,
            args: {
                id: {
                    type: GraphQLID
                },
                resolve: (parent,args) => {
                    return department.findById(args.id)
                }
            }
        },
        department: {
            type: new GraphQLList(department),
            resolve: (parent,args) => {
                return department.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})