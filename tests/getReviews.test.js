import getReviews from "../src/redux/actionCreators/ratings-reviews/getReviews/index.js";

describe("Get Reviews Actions and Creators", function() {
  it("Should retrieve reviews based on item ID", async () => {
    let reviews = getReviews(2);
    let review = await reviews(items => {
      return expect(items.type).toBe("GET_REVIEWS");
    });
  });
});
