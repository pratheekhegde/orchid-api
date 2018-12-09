import mongoose from 'mongoose';

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

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
CampaignSchema.method({});

export default mongoose.model('Campaign', CampaignSchema);
