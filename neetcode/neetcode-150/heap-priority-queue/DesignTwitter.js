import { MinPriorityQueue } from "datastructures-js";

class Twitter {
  constructor() {
    this.users = new Map();
    this.tweetCount = 0;
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    const user = this.getUser(userId);

    this.tweetCount++;
    user.tweets.push({ id: tweetId, index: this.tweetCount });
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId, length = 10) {
    const user = this.getUser(userId);

    const newsFeed = new MinPriorityQueue((value) => value.index);

    for (const followee of user.followees) {
      for (let i = followee.tweets.length - 1; i >= 0; i--) {
        const tweet = followee.tweets[i];
        if (newsFeed.size() >= length && tweet.index < newsFeed.front().index)
          break;
        newsFeed.enqueue(tweet);
        if (newsFeed.size() > length) newsFeed.dequeue();
      }
    }

    for (let i = user.tweets.length - 1; i >= 0; i--) {
      const tweet = user.tweets[i];
      if (newsFeed.size() >= length && tweet.index < newsFeed.front().index)
        break;
      newsFeed.enqueue(tweet);
      if (newsFeed.size() > length) newsFeed.dequeue();
    }

    return newsFeed.toArray().reverse().map((value) => value.id);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    const follower = this.getUser(followerId);
    const followee = this.getUser(followeeId);

    follower.followees.add(followee);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    const follower = this.getUser(followerId);
    const followee = this.getUser(followeeId);

    follower.followees.delete(followee);
  }

  getUser(userId) {
    const existingUser = this.users.get(userId);
    if (existingUser) return existingUser;

    const user = {
      id: userId,
      tweets: [],
      followees: new Set(),
    };
    this.users.set(userId, user);
    return user;
  }
}
