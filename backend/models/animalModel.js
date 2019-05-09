import mongoose from 'mongoose'

const { Schema } = mongoose;

const animalModel = new Schema(
  {
    type: { type: String },
    race: { type: String },
    gender: { type: String },
    age: { type: Number },
    isAdopted: { type: Boolean, default: false },
    ownerId: { type: Number, default: '' },
  }
);

module.exports = mongoose.model('Animal', animalModel);