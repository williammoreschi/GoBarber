import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    /**
     * Por padrão nosso schema vai ter o created_at e o updated_at
     */
    timestamps: true,
  }
);

export default mongoose.model('Notification', NotificationSchema);
