import { Content } from "../../entity/Content";

export default {
  Query: {
    content: (_, { id }) => Content.findOne(id),
    contents: (_, { id }) => Content.find()
  },
  Mutation: {
    createContent: async (parent, args) => {
      return Content.save({ ...args.input });
    },
    updateContent: async (parent, args) => {
      const toUpdate = await Content.findOne(args.id);
      if (!toUpdate) return null; // if content doesn't exist return null
      return Content.save({ ...toUpdate, ...args.input }); // else return the updated data
    },
    deleteContent: async (parent, args) => {
      const results = await Content.delete(args.id);
      return results.affected; // return true if content got deleted else false
    }
  }
};
