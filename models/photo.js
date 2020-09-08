"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  photo.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      location: DataTypes.STRING,
      tags: DataTypes.TEXT,
      category: DataTypes.STRING,
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feedback: {
        type: DataTypes.BOOLEAN,
        defaultValue: "N",
      },
      tips: {
        type: DataTypes.BOOLEAN,
        defaultValue: "N",
      },
      allowUse: {
        type: DataTypes.BOOLEAN,
        defaultValue: "N",
      },
      allowDownload: {
        type: DataTypes.BOOLEAN,
        defaultValue: "N",
      },
    },
    {
      sequelize,
      modelName: "photo",
    }
  );
  return photo;
};
