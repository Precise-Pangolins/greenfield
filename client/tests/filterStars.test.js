import filterStars from "../../src/redux/actionCreators/ratings-reviews/FilterStars/index.js";

describe("filter reviews by star rating", function() {
  it("should have return an array of reviews of the same rating", async () => {
    let reviews = filterStars(1, 2);
    let review = await reviews(action => {
      return expect(action.reviews[0].rating).toBe(2);
    });
  });
});
