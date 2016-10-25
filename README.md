[![Build Status](https://travis-ci.org/newtonian-platypus/greenCast.svg?branch=master)](https://travis-ci.org/newtonian-platypus/greenCast)

# GreenCast

> Pithy project description

## Team

  - __Product Owner__: teamMember
  - __Scrum Master__: teamMember
  - __Development Team Members__: teamMember, teamMember

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> npm start

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
bower install
```

### Roadmap

View the project roadmap [here](https://github.com/newtonian-platypus/greenCast/issues)

### API

| Method | Uri                          | Authorization         | Comment                                      
|--------|------------------------------|-----------------------|----------------------------------------------|
| GET    | /                            | Anonymous             | GreenCast HomePage                           |
| GET    | /user                        | Anonymous             | Login/Signup Form                            |
| POST   | /user                        | Anonymous / User      | Submittal of Login/Signup                    |
| GET    | /user/:username              | Anonymous             | User's Public Information                    |
| GET    | /user/:username/subscriptions| User                  | User's Podcast Subscriptions                 |
| POST   | /user/:username/subscriptions| User                  | Add a Podcast to a User's Subscriptions      |
| GET    | /channel/:channelId          | Anonymous             | View A PodCast Channel's Episodes            |

## Contributing

See [CONTRIBUTING.md](https://github.com/newtonian-platypus/greenCast/blob/master/CONTRIBUTING.md) for contribution guidelines.
