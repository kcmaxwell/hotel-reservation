const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
    }),
});

module.exports = CustomerType;