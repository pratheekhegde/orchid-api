import { Campaign } from "../../entity/Campaign";
import { Publisher } from "../../entity/Publisher";
import { getConnection } from "typeorm";

export default {
  Query: {
    campaign: (_, { id }) => Campaign.findOne(id),
    campaigns: (_, { id }) => Campaign.find()
  },
  Mutation: {
    createCampaign: async (parent, args) => {
      const publishers = await Publisher.findByIds(args.input.publishers);
      return Campaign.save({ ...args.input, publishers });
    },
    updateCampaign: async (parent, args) => {
      const toUpdate = await Campaign.findOne(args.id);
      if (!toUpdate) return null; // if content doesn't exist return null
      const publishers = await Publisher.findByIds(args.input.publishers);
      return Campaign.save({ ...toUpdate, ...args.input, publishers });
    },
    deleteCampaign: async (parent, args) => {
      const results = await Campaign.delete(args.id);
      return results.affected;
    }
  },
  Campaign: {
    content: (parent, { id }, ctx, info) => parent.content,
    publishers: parent => parent.publishers || []
  }
};
