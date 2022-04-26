const request = require("supertest");
const app = require("./app")


// using done to notify that it ends 
describe("Test the root path", () => {
    test('should response the GET method', async() => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("Hello World!")
    });
})