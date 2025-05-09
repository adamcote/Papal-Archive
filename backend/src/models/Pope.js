const mongoose = require('mongoose');

const popeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  regnalName: {
    type: String,
    required: true,
    trim: true
  },
  birthName: {
    type: String,
    trim: true
  },
  birthDate: {
    type: Date
  },
  deathDate: {
    type: Date
  },
  reignStart: {
    type: Date,
    required: true
  },
  reignEnd: {
    type: Date
  },
  nationality: {
    type: String,
    trim: true
  },
  birthPlace: {
    type: String,
    trim: true
  },
  achievements: [{
    type: String,
    trim: true
  }],
  notableEvents: [{
    title: String,
    description: String,
    date: Date
  }],
  documents: [{
    title: String,
    type: String,
    date: Date,
    description: String,
    url: String
  }],
  legacy: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    trim: true
  },
  order: {
    type: Number,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

// Indexes for efficient querying
popeSchema.index({ regnalName: 1 });
popeSchema.index({ reignStart: 1 });
popeSchema.index({ order: 1 });

const Pope = mongoose.model('Pope', popeSchema);

module.exports = Pope; 