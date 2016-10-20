const Audiosearch = require('./lib/audiosearch');
const Promise = require('bluebird');
const request = require('request');
const fs = require('fs');
const config = require('./config');

// (AppID, Secret)
const audioS = new Audiosearch(config.AUDIOSEARCH_APP_ID, config.AUDIOSEARCH_SECRET);


audioS.getEpisode(229662).then(function (episode) {  
  fs.writeFile('stubEpisode.json', JSON.stringify(episode), err => {
    if (err) throw err;
    console.log("Saved!")
  });
});

audioS.getShow(21).then(function (show) {  
  fs.writeFile('stubShow.json', JSON.stringify(show), err => {
    if (err) throw err;
    console.log("Saved!")
  });
});

audioS.charts().then(function (shows) {  
  fs.writeFile('stubCharts.json', JSON.stringify(shows), err => {
    if (err) throw err;
    console.log("Saved!")
  });
});


