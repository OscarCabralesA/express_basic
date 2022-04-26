const request = require("supertest");
const app = require("./app")

// using done to notify that it ends 
describe("Test the app", () => {
    
    test('should response the GET method', async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("Hello World!")
    });

    test('should receive a response in path launchx', async () => {
        const response = await request(app).get("/launchx")
        expect(response.text).toBe("Bienvenidos a launchx")
    });

    test('should receive a response of object', async () => {
        const response = await request(app).get("/explorersInNode")
        expect(response.body.name).toBe("Mauri")
        expect(response.body.msg).toBe("Helloo")
    });

    test('should receive a response of object, given params in path url', async () => {
        const response = await request(app).get("/explorers/mauri")
        expect(response.body.explorerName).toBe("mauri")
    });
})