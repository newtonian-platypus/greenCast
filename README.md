[![Build Status](https://travis-ci.org/newtonian-platypus/greenCast.svg?branch=master)](https://travis-ci.org/newtonian-platypus/greenCast)

# GreenCast

> GreenCast is a PodCast listening App which allows users to search the iTunes API for PodCasts, subscribe to and unsubscribe from Channels, and receive a feed containing a subscribed Channel's most recent Episodes.  An audio player at the bottom of the screen allows the User to adjust volume, play, pause, and move to different locations in the PodCast.  

## Table of Contents

1. [Team](##Team)
2. [Usage](##Usage)
3. [Requirements](##Requirements)
4. [Development](##Development)
    A. [Installing Dependencies](###Installing-Dependencies)
    B. [Roadmap](###Roadmap)
    C. [API](###API)
5. [Contributing](##Contributing)

  - __Product Owner__: Will Simmons
  - __Scrum Master__: Chase Starr
  - __Development Team Members__: Meredith Nachman, Hans Trautlein

## Team

  - __Product Owner__: Will Simmons
  - __Scrum Master__: Chase Starr
  - __Development Team Members__: Meredith Nachman, Hans Trautlein

## Usage

> npm run start -dev

## Requirements

- Node 6.7
- Express 4.14.x
- MongoDB 3.x
- React 0.14.7

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Roadmap

View the project roadmap [here](https://github.com/newtonian-platypus/greenCast/issues)

### API

| Method | Uri                          | Authorization         | Comment                                      
|--------|------------------------------|-----------------------|----------------------------------------------|
| GET    | /                            | Anonymous             | GreenCast HomePage & Login                   |
| GET    | /user/:username/subscriptions| User                  | User's Podcast Subscriptions                 |
| POST   | /user/:username/subscriptions| User                  | Add a Podcast to a User's Subscriptions      |
| DELETE | /user/:username/subscriptions| User                  | Remove a Podcast from a User's Subscriptions |
| GET    | /channel/:channelId          | User                  | View A PodCast Channel's Episodes            |
| GET    | /api/toppodcasts             | Anonymous             | Displays top PodCasts on HomePage            |
| GET    | /logout                      | User                  | Logs a User out of App                       |
| GET    | /auth/github                 | Anonymous             | User directed to Github for authentication   |
| GET    | /auth/github/callback        | User                  | Redirect to HomePage or User's HomePage      |

## Contributing

See [CONTRIBUTING.md](https://github.com/newtonian-platypus/greenCast/blob/master/CONTRIBUTING.md) for contribution guidelines.
