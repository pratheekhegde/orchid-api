import mongoose from 'mongoose';
import Joi from 'joi';

/**
 * Content Schema
 */
const CampaignSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    content: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Content',
      required: true,
    },
    campaignStartDate: {
      type: Date,
      required: true,
    },
    campaignEndDate: {
      type: Date,
      required: true,
    },
    publishers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        required: true,
      },
    ],
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false, select: false },
    __v: { type: Number, select: false },
  },

  { timestamps: true }
);

CampaignSchema.statics.validateModel = function(obj) {
  var schema = {
    name: Joi.string()
      .min(5)
      .max(30)
      .required()
      .label('Campaign Name'),
    content: Joi.string()
      .min(1)
      .max(2)
      .required()
      .label('Content'),
    publishers: Joi.array()
      .items(Joi.string(), Joi.number())
      .required(),
    campaignStartDate: Joi.date().required(),
    campaignEndDate: Joi.date()
      .min(Joi.ref('campaignStartDate'))
      .required(),
    isActive: Joi.boolean().required(),
  };
  return Joi.validate(obj, schema, { abortEarly: false });
};

export default mongoose.model('Campaign', CampaignSchema);
