const root = (req, res) => {
  res.status(200);
  res.send('hello world');
};


// routes for user data
const addUser = (req, res) => {
  // creates a new user with email address
};

const getUser = (req, res) => {
  // returns a user's data
};

const getSubscriptions = (req, res) => {
  // returns a user's subscriptions
};

const addSubscription = (req, res) => {
  // adds a channel to a user's subscriptions
}

// routes for channel data
const getEpisodes = (req, res) => {
  // grabs rss data, scrapes it, and returns array of episodes
};

module.exports = {
  root: root,
  getEpisodes: getEpisodes,
  createUser: createUser
};