const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

const HotelType = new GraphQLObjectType({
    name: "Hotel",
    fields: () => ({
        id: { type: GraphQLInt },
        name: {type: GraphQLString}
    }),
})