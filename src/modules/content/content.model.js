import mongoose from 'mongoose';

/**
 * Content Schema
 */
const ContentSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true, unique: true },
    lastUpdatedAt: { type: Date, required: true, unique: true },
    type: { type: String, required: true, unique: true },
  },

  { collection: 'Contents' }
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
