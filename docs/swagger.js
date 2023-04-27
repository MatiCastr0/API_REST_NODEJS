const swaggerJsdoc = require("swagger-jsdoc");

/* API Config Info */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de la API REST - CURSO NODEJS",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      authLogin: {
        type: "object",
        require: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      authRegister: {
        type: "object",
        require: ["email", "password", "age", "name"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          age: {
            type: "integer",
          },
          name: {
            type: "string",
          },
        },
      },
      track: {
        type: "object",
        require: ["name", "album", "cover", "artist", "duration", "mediaId"],
        properties: {
          name: {
            type: "string",
          },
          album: {
            type: "string",
          },
          cover: {
            type: "string",
          },
          artist: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              nickname: {
                type: "string",
              },
              nationality: {
                type: "string",
              },
            },
          },
          duration: {
            type: "object",
            properties: {
              start: {
                type: "integer",
              },
              end: {
                type: "integer",
              },
            },
          },
          mediaId: {
            type: "string",
          },
        },
      },
      storage: {
        type: "object",
        require: ["url", "filename"],
        properties: {
          url: {
            type: "string",
          },
          filename: {
            type: "string",
          },
        },
      },
    },
  },
};

/* Opciones */

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};
const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
