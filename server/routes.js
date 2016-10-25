const root = (req, res) => {
  res.status(200);
  res.send('hello world');
};

// routes for subscriptions
const getSubscriptions = (req, res) => {
  // returns a user's subscriptions
};

const addSubscription = (req, res) => {
  // adds a channel to a user's subscriptions
};

// routes for user data
const getUser = (req, res) => {
  // returns a user's data
};

const addUser = (req, res) => {
  // creates a new user with email address
};

// routes for channel data
const getEpisodes = (req, res) => {
  // grabs rss data, scrapes it, and returns array of episodes
  const channel = req.params.channelId;

  res.json({id: channel});
};

module.exports = {
  root: root,
  addUser: addUser,
  getUser: getUser,
  getSubscriptions: getSubscriptions,
  addSubscription: addSubscription,
  getEpisodes: getEpisodes,
};