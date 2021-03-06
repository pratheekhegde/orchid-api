import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from "graphql-yoga";

import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

createConnection()
  .then(async connection => {
    const server = new GraphQLServer({ typeDefs, resolvers });
    server.start(
      {
        endpoint: "/graphql",
        subscriptions: "/graphql",
        playground: process.env.NODE_ENV === "production" ? false : "/"
      },
      () => console.log("Server is running on localhost:4000")
    );
  })
  .catch(error => console.log(error));
