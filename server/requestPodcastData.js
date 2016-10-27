const request = require('request');
const parsePodcast = require('node-podcast-parser');
const lookupEndpoint = 'http://itunes.apple.com/lookup?id=';

const itunesLookup = (channelId, cb) => {
  request(lookupEndpoint + channelId, (err, res, body) => {
    if (err) {
      cb(err, null);
    } 
    cb(err, body);
  });
};

const requestRss = (rssUrl, cb) => {
  request(rssUrl, (err, res, body) => {
    if (err) { 
      cb(err, null);
    }
    parsePodcast(body, (err, data) => {
      if (err) {
        cb(err, null);
      }
      cb(err, data);
    });
  });
};

const fixEpisodes = (episodes) => {
  episodes.map(episode => {
    episode.url = episode.enclosure.url;
  });
};

const feedGenerator = (channelId, cb) => {
  itunesLookup(channelId, (err, podcasts) => {
    if (err) { 
      console.log(err);
      return cb(err, null);
    }
    const podcast = JSON.parse(podcasts).results[0];
    requestRss(podcast.feedUrl, (err, feed) => {
      if (err) {
        console.log(err);
        return cb(err, null);
      } 
      feed.episodes.map(episode => episode.url = episode.enclosure.url);
      cb(err, feed.episodes);
    });
  });
};

module.exports = {
  itunesLookup: itunesLookup,
  requestRss: requestRss,
  feedGenerator: feedGenerator,
  fixEpisodes: fixEpisodes
};  

//*Useful Result Data
//title
//description.long or description.short
//link
//image
//within episodes array
// title
// published
// description
// duration
// enclosure


// ** Example Usage **
// itunesLookup(917918570, (err, podcasts) => {
//   if (err) console.log(err);

//   const podcast = JSON.parse(podcasts).results[0];
//   requestRss(podcast.feedUrl, (err, feed) => {
//     if (err) console.log(err);
//     console.log('title', feed.title);
//     console.log('link', feed.link);
//     console.log('short', feed.description.short);
//     console.log('latest episode', feed.episodes[0]);
//   });
// });
