import { Content } from "../../entity/Content";

export default {
    Query: {
        content: (_, { id }) => Content.findOne(id),
        contents: (_, { id }) => Content.find()
    },
    Mutation: {
        createContent: async (parent, args) => {
            return Content.save({ ...args.input })
        },
        updateContent: async (parent, args) => {
            return Content.save({ ...args.input })
        },
        deleteContent: async (parent, args) => {
            const contentToRemove = await Content.findOne(args.input.id);
            return Content.remove(contentToRemove)
        }
    },
}