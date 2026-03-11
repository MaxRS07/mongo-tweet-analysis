import connect from '../client.js';

connect.then(db => {
    const collection = db.collection("tweet");
    collection.aggregate([
        { $group: { _id: '$user.screen_name', avgRetweets: { $avg: '$retweet_count' }, tweetCount: { $sum: 1 } } },
        { $match: { tweetCount: { $gt: 3 } } },
        { $sort: { avgRetweets: -1 } },
        { $limit: 10 },
        { $project: { _id: 0, screen_name: '$_id', avgRetweets: 1, tweetCount: 1 } }
    ]).toArray().then(users => {
        console.log("Top 10 users by average retweets (with more than 3 tweets):", users.map(u => u.screen_name + ": " + u.avgRetweets.toFixed(2) + " avg retweets over " + u.tweetCount + " tweets"));
    })
});