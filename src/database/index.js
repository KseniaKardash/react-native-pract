/* @flow */
import PostSchema from "./schema/post";

const Realm = require("realm");

const databaseOptions = {
  path: "posts.realm",
  schema: [PostSchema],
  schemaVersion: 0
};
export default new Realm(databaseOptions);
