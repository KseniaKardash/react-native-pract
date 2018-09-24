/*global filterPosts:true*/
const posts = [
  {
    id: 0,
    userName: "Williamson Conrad"
  },
  {
    id: 1,
    userName: "Gracie Peck"
  },
  {
    id: 2,
    userName: "Jessie Moss"
  },
  {
    id: 3,
    userName: "Jess Fed"
  }
];

filterPosts = (posts, query) => {
  return posts.filter(post => {
    const userName = post.userName.toUpperCase();
    const queryData = query.toUpperCase();
    return userName.indexOf(queryData) !== -1;
  });
};

describe("filterPosts", () => {
  it("should filter posts and return an array with required userName posts", () => {
    const expectedPosts = [posts[0]];
    expect(filterPosts(posts, "Williamson Conrad")).toEqual(expectedPosts);
    expect(filterPosts(posts, "Kardash ksenia")).toEqual([]);
    expect(filterPosts(posts, "")).toEqual(posts);
    expect(filterPosts(posts, "Jess")).toEqual([posts[2], posts[3]]);
    expect(filterPosts(posts, "Jess").length).toBe(2);
  });
});
