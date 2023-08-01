# The Graph Epochs

This is a Next.js React app interview challenge for the Edge & Node's Product Engineering team.

Create a private repo based on this one and add the interviewers as collaborators.
You can also email us a [git bundle](https://git-scm.com/docs/git-bundle) of your repo history if you prefer.

We recommend spending no more than 4 hours on this challenge. If you don't finish, that's ok. Use any GraphQL client and styling solution you're comfortable with. The focus of this is more on general programming and problem-solving than on specific technologies.

---

In this exercise, you will create an Epochs table that has sorting, search and/or pagination. Data will be available at the endpoint provided in the .env file.

First off, watch the [video](https://storage.googleapis.com/graph-web/blog/The%20Graph%20-%20Table.mov) to see what the end result should look like.

Designs can be found [here](https://invis.io/6WZZK4QUGFZ). You might be able to use the "Inspect" mode in Invision to get the styles. Here is the [Sketch file](https://storage.googleapis.com/graph-web/blog/The%20Graph%20-%20Table.sketch). All the assets can be found [here](https://storage.googleapis.com/graph-web/blog/Table%20Assets.zip).

1. You can find the subgraph here and use the playground to see the schema and make queries: https://thegraph.com/explorer/subgraph/graphprotocol/graph-network-mainnet.
2. For this challenge, we will query the Entity called `Epoch`.
3. After you get all of the epochs (or some of them, if you use pagination), render them in a table with the columns as in Designs.
4. All columns should be sortable in `asc/desc` order. Default order should be by Epoch's `startBlock`. Make use of GraphQL queries.
5. Search should only be implemented for Epoch's `startBlock`. Make sure to use a GraphQL query.
6. As a bonus, there are a few animations/transitions (check the video).
7. Another bonus, the table should be horizontally scrollable on narrow screens.

# Setup and Development

1. Fork this repo `git@github.com:edgeandnode/interview-challenge.git`
2. Make sure you are inside of the repo you just cloned, by running `cd interview-challenge`
3. Run `yarn` to install all dependencies
4. Run `yarn dev` to start the app
5. Open `http://localhost:4000` in your browser
