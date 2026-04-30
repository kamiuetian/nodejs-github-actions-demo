const request = require("supertest");
const server = require("./server");

describe("Node.js Hello World Server", () => {
  test("GET / should return Hello World message", async () => {
    const response = await request(server).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World from Node.js!");
  });

  test("GET /unknown should return 404", async () => {
    const response = await request(server).get("/unknown");

    expect(response.statusCode).toBe(404);
    expect(response.text).toBe("Page Not Found");
  });
});
