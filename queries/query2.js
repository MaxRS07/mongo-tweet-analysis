import connect from '../client.js';

connect.then(db => {
    const collection = db.collection("tweet");
    const top_users = collection.aggregate([
        { $sort: { 'user.followers_count': -1 } },
        { $group: { _id: '$user.id_str', followers: { $first: '$user.followers_count' }, screen_name: { $first: '$user.screen_name' }, name: { $first: '$user.name' } } },
        { $sort: { followers: -1 } },
        { $limit: 10 }
    ]);
    top_users.toArray().then(users => {
        console.log("Top 10 users by followers:", users.map(u => u.screen_name + ": " + u.followers));
    })
});