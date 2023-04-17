import supertest from "supertest";
import app from "../src";
import { connectionDB } from "../src/database/db";

const server = supertest(app);

afterEach(async () => {
  await connectionDB.query('DELETE FROM "profileInformations"');
  await connectionDB.query("DELETE FROM users");
});

describe("POST /login", () => {
  it("Should respond with status 200 ", async () => {
    await server.post("/tattoArtist/registration").send({
      email: "pedrorondelli@hotmail.com",
      password: "123456",
      confirmation: "123456",
    });
    const result = await server
      .post("/tattoArtist/login")
      .send({ email: "pedrorondelli@hotmail.com", password: "123456" });

    expect(result.status).toBe(200);
  });
  it("Should respond with status 400 when it's not in the right format ", async () => {
    await server.post("/tattoArtist/registration").send({
      email: "pedrorondelli@hotmail.com",
      password: "123456",
      confirmation: "123456",
    });
    const result = await server
      .post("/tattoArtist/login")
      .send({ password: "123456" });
    expect(result.status).toBe(400);
  });

  it("Should respond with status 400 when user is not registered", async () => {
    const result = await server
      .post("/tattoArtist/login")
      .send({ email: "pedrorondelli@hotmail.com", password: "123456" });
    console.log(result.text);
    expect(result.status).toBe(400);
    expect(result.text).toBe("Email ou Senha incorretos");
  });
});

describe("POST /registration", () => {
  it("Should respond with status 200 ", async () => {
    const result = await server.post("/tattoArtist/registration").send({
      email: "pedrorondelli@hotmail.com",
      password: "123456",
      confirmation: "123456",
    });
    expect(result.status).toBe(200);
  });
  it("Should respond with status 400 when it's not in the right format ", async () => {
    const result = await server.post("/tattoArtist/registration").send({
      email: "pedrorondelli@hotmail.com",
      password: "123456",
    });

    expect(result.status).toBe(400);
  });
  it("Should respond with status 400 when user already exist", async () => {
    await server
      .post("/tattoArtist/registration")
      .send({
        email: "pedrorondelli@hotmail.com",
        password: "123456",
        confirmation: "123456",
      });

    const result = await server
      .post("/tattoArtist/registration")
      .send({
        email: "pedrorondelli@hotmail.com",
        password: "123456",
        confirmation: "123456",
      });
    expect(result.status).toBe(400);
    expect(result.text).toBe("Email já cadastrado");
  });
});
