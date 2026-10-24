const path = require('path');
const envPath = path.resolve(__dirname, '..', '.env');
require('dotenv').config({ path: envPath });
const mongoose = require('mongoose');
const Job = require('../models/Job');
const Resource = require('../models/Resource');
const { jobs } = require('./jobs.seed');
const { resources } = require('./resources.seed');

async function run() {
  let uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set. Create .env file.');
    process.exit(1);
  }

  const hasPlaceholders =
    uri.includes('USER') ||
    uri.includes('PASSWORD') ||
    uri.includes('cluster.mongodb.net');

  if (hasPlaceholders && process.env.NODE_ENV !== 'production') {
    console.warn('MONGODB_URI appears to be a template. Falling back to local MongoDB.');
    uri = process.env.MONGODB_LOCAL_URI || 'mongodb://127.0.0.1:27017/nextcareer';
  }

  await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });

  await Job.deleteMany({});
  await Job.insertMany(jobs);
  console.log(`Seeded ${jobs.length} jobs`);

  await Resource.deleteMany({});
  await Resource.insertMany(resources);
  console.log(`Seeded ${resources.length} resources`);

  console.log('Seed complete.');
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
