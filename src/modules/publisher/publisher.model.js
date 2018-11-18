import mongoose from 'mongoose';

/**
 * Publisher Schema
 */
const PublisherSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
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
PublisherSchema.method({});

export default mongoose.model('Publisher', PublisherSchema);
