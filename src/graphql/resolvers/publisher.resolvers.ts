import { Publisher } from "../../entity/Publisher";

export default {
  Query: {
    publisher: (_, { id }) => Publisher.findOne(id),
    publishers: (_, { id }) => Publisher.find()
  },
  Mutation: {
    createPublisher: async (parent, args) => {
      return Publisher.save({ ...args.input });
    },
    updatePublisher: async (parent, args) => {
      const toUpdate = await Publisher.findOne(args.id);
      if (!toUpdate) return null; // if content doesn't exist return null
      return Publisher.save({ ...toUpdate, ...args.input }); // else return the updated data
    },
    deletePublisher: async (parent, args) => {
      const results = await Publisher.delete(args.id);
      return results.affected;
    }
  }
};
