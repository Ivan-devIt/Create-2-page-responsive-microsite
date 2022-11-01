import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  zipCode: {
    type: Number,
    required: true,
  },

  usState: {
    type: String,
    required: true,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
