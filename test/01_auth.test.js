const request = require("supertest");

const app = require("../app");

const testAuthLogin = {
  email: "string",
  password: "string",
};

const testAuthRegister = {
  email: "matias121212@gmail.com",
  password: "123456",
  age: 20,
  name: "mati",
};

describe("[AUTH] esta es la prueba de /api/auth", () => {
  test("Esto deberia de retornar un 403", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(testAuthLogin);
    expect(response.statusCode).toEqual(403);
  });
});

describe("[AUTH] esta es la prueba de /api/auth", () => {
  test("Esto deberia de retornar un 403", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(testAuthRegister);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("data.user");
    expect(response.body).toHaveProperty("data.token");
  });
});
