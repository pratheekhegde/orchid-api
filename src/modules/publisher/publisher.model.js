import mongoose from 'mongoose';

/**
 * Content Schema
 */
const PublisherSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
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

export default mongoose.model('Content', PublisherSchema);
