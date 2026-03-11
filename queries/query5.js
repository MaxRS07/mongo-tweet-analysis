import connect from '../client.js';

connect.then(db => {
    const collection = db.collection("tweet");
    // select distinct users and create collection
    collection.aggregate([
        { $group: { _id: "$user.id", user: { $first: "$user" } } },
        { $replaceRoot: { newRoot: "$user" } },
        { $out: "users" }


    ]).toArray().then(() => {
        console.log("Created 'users' collection with distinct users.");
    });

    // tweets with user replaced by just user id 
    collection.aggregate([
        { $project: { text: 1, retweeted: 1, user_id: "$user.id" } },
        { $out: "tweets_with_user_id" }
    ]).toArray().then(() => {
        console.log("Created 'tweets_with_user_id' collection with user replaced by user id.");
    });
})