# Mongo Tweet Analysis

## Run it

1. [Download the tweets generated during the 2020 ieeevis Conference](https://johnguerra.co/viz/influentials/ieeevis2020/ieeevis2020Tweets.dump.bz2Links)
2. Import it to Mongos, and connect to the server using the Mongo Compass client
3. Copy the queries (from *queries/*) in the app shell, or run files using node

## What is it

In this assignment I use Mongo node client library to extract data from a document database containing Twitter user and post data.

## Queries

1. How many tweets are not retweets or replies?
2. Return the top 10 screen_names by their number of followers.
3. Who is the person that got the most tweets?
4. Who are the top 10 people that got the most retweets on average, after tweeting more than 3 times
5. Write the instructions that will separate the Users information into a different collection
    - Create a user collection that contains all the unique users.
    - Create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id
