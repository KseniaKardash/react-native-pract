/* @flow */
const PostSchema = {
  name: "Post",
  primaryKey: "id",
  properties: {
    id: "int",
    userName: { type: "string", indexed: true },
    likes: { type: "int", default: 0 },
    description: { type: "string", default: "" },
    tag: { type: "string", default: "" },
    uriPhoto: "string",
    uri: "string"
  }
};
export default PostSchema;
