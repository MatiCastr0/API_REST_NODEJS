const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Storage = require("./storage");

const Tracks = sequelize.define(
  "tracks",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    album: {
      type: DataTypes.STRING,
    },
    cover: {
      type: DataTypes.STRING,
    },
    artist_name: {
      type: DataTypes.STRING,
    },
    artist_nickname: {
      type: DataTypes.STRING,
    },
    artist_nationality: {
      type: DataTypes.STRING,
    },
    duration_start: {
      type: DataTypes.INTEGER,
    },
    duration_end: {
      type: DataTypes.INTEGER,
    },
    mediaId: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Implementando modelo personalizado
 */
Tracks.FindOneData = function (id) {
  Tracks.belongsTo(Storage, {
    foreignKeys: "mediaId",
    as: "audio",
  });

  return Tracks.findOne({ where: { id }, include: "audio" });
};

Tracks.FindAllData = function () {
  Tracks.belongsTo(Storage, {
    foreignKeys: "mediaId",
    as: "audio",
  });

  return Tracks.findAll({ include: "audio" });
};

module.exports = Tracks;
