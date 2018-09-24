import mongoose from 'mongoose';

/**
 * Content Schema
 */
const ContentSchema = mongoose.Schema(
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
ContentSchema.method({});

export default mongoose.model('Content', ContentSchema);
