import { Publisher } from "../../entity/Publisher";

export default {
    Query: {
        publisher: (_, { id }) => Publisher.findOne(id),
        publishers: (_, { id }) => Publisher.find()
    },
    Mutation: {
        createPublisher: async (parent, args) => {
            return Publisher.save({ ...args.input })
        },
        updatePublisher: async (parent, args) => {
            return Publisher.save({ ...args.input })
        },
        deletePublisher: async (parent, args) => {
            const toRemove = await Publisher.findOne(args.input.id);
            return Publisher.remove(toRemove)
        }
    },
}