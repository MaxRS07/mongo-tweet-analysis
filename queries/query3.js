import connect from '../client.js';

connect.then(db => {
    const collection = db.collection("tweet");
    const top_users = collection.aggregate([
        { $group: { _id: '$user.id_str', count: { $sum: 1 }, name: { $first: '$user.name' }, screen_name: { $first: '$user.screen_name' } } },
        { $sort: { count: -1 } }
    ])
    top_users.toArray().then(users => {
        console.log(users.map(u => u.screen_name + ": " + u.count + " tweets"))
    })
})