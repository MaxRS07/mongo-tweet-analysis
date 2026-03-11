import connect from '../client.js';

connect.then(db => {
    const collection = db.collection("tweet");
    const non_retweeted = collection.find({ retweeted: false })
    non_retweeted.toArray().then(tweets => {
        console.log("number of non-retweets:", tweets.length);
    });
    collection.countDocuments().then(count => {
        console.log("Total number of tweets:", count);
    });
});