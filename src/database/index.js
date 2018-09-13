/* @flow */
import Post from "./schema/post";

const Realm = require("realm");

const realmV2 = new Realm({ schema: [Post] });

export default realmV2;
