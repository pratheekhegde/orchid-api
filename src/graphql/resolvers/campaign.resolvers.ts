import { Campaign } from "../../entity/Campaign";

export default {
    Query: {
        campaign: (_, { id }) => Campaign.findOne(id, { relations: ["content", "publishers"] }),
        campaigns: (_, { id }) => Campaign.find({ relations: ["content", "publishers"] })
    },
    Mutation: {
        createCampaign: async (parent, args) => {
            return Campaign.save({ ...args.input })
        },
        updateCampaign: async (parent, args) => {
            return Campaign.save({ ...args.input })
        },
        deleteCampaign: async (parent, args) => {
            const campaignToRemove = await Campaign.findOne(args.input.id);
            return Campaign.remove(campaignToRemove)
        }
    },
    Campaign: {
        content: (parent, { id }, ctx, info) => parent.content,
        publishers: (parent) => parent.publishers || []
    }
}