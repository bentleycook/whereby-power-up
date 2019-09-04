# Whereby Power-Up for Trello

A sample Power-Up for Trello that allows Whereby users to set a default
Whereby room name for their board. A Whereby button is added to the board that,
when clicked, opens the Whereby room with the name that has been set in the
Power-Up's settings.

This Power-Up is based on the sample [Weather Power-Up](https://github.com/trello/weather-power-up).

## Setup Prerequisites

We developed the Weather Power-Up live on a YouTube stream which you can find here: https://www.youtube.com/watch?v=dLCkcQnwAQk.

### NodeJS

We use [NodeJS](https://nodejs.org) to build our Power-Up. Currently, this
project expects that you are running version 12.x

We recommend you use a tool called [nvm](https://github.com/nvm-sh/nvm) to help
you manage your versions of node. If you have it installed, you can simply run
`nvm i` in this directory to install the right version of node.

### Yarn

We use [Yarn](https://yarnpkg.com) to install and manage our dependencies. Once
you've got Yarn installed, in this directory, you can run `yarn install` to
setup your dependencies locally.

First, install dependencies:

> yarn install

To build the site, run:

> yarn build

This will build all of your assets into the `dist/` directory.

### Hosting

We need a place to host our Power-Up. For the purposes of this example we
recommend [Github Pages](https://pages.github.com/).

Because we are using Github Pages, we are checking the `dist` folder into git
history.

## Resources

Trello has a whole [Developers Site](https://developers.trello.com/) with
various guides and documentation.

You can jump right to
[Power-Ups Documentation](https://developers.trello.com/reference#power-ups-intro)
