require('dotenv').config();
const mongoose = require('mongoose');
const Pope = require('../models/Pope');
const initialPopes = require('../data/initial-popes');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/papal-archive');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Pope.deleteMany({});
    console.log('Cleared existing data');

    // Insert initial popes
    await Pope.insertMany(initialPopes);
    console.log('Seeded database with initial popes');

    // Verify the data
    const count = await Pope.countDocuments();
    console.log(`Database now contains ${count} popes`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase(); 