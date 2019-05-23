const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");

describe("restrict tests", () => {
  beforeEach(async () => {
    await db("items").truncate();
  });
  afterEach(async () => {
    await db("items").truncate();
  });

  it("gives back a message if a token is not provided", async () => {
    const response = await request(server)
        .post("/api/items");
    expect(response.body).toEqual({ message: "Invalid credentials" });
  });

  it("gives a 401 status if a token is not provided", async () => {
    const response = await request(server)
        .post("/api/items");
    expect(response.status).toEqual(401);
  })
})
