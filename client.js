import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";

async function connect() {
    const client = await new MongoClient(uri).connect();
    const db = client.db("ieeevisTweets");
    console.log("Connected to MongoDB", db.databaseName);
    return db;
}

export default connect();