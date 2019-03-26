import { Content } from "../../entity/Content";

export default {
    Query: {
        content: (_, { id }) => Content.findOne(id),
        contents: (_, { id }) => Content.find()
    },
    Mutation: {
        createContent: async (parent, args) => {
            console.log(args)
            return Content.save({ ...args })
        },
        updateContent: async (parent, args) => {
            return Content.save({ ...args })
        },
        deleteContent: async (parent, args) => {
            const contentToRemove = await Content.findOne(args.id);
            return Content.remove(contentToRemove)
        }
    },
}