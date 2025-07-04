const { expect } = require("chai");
let mod = require("../step1");
describe("testing for user", () => {
  let app = null;
  this.beforeAll(() => {
    app = mod;
  });
  it("should check for user exist", () => {
    expect(app.user).to.be.not.undefined;
  });
  it("should check for user for to be Ramesh", () => {
    expect(app.user).to.equal("Ramesh");
  });
  it("should check for user for to be 20", () => {
    expect(app.user.length).to.equal(20);
  });
  this.afterAll(() => {
    app = null;
  });
});
