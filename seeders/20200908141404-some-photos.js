"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "photos",
      [
        {
          title: "Test title",
          description: "test data description",
          location: "",
          tags: "test",
          category: "test",
          imageUrl:
            "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&w=1000&q=80",
          feedback: "Y",
          tips: "N",
          allowUse: "N",
          allowDownload: "Y",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cool Beach",
          description: "Hot Summer",
          location: "Goa",
          tags: "summer",
          category: "test",
          imageUrl:
            "https://pix10.agoda.net/geo/city/18720/1_18720_02.jpg?s=1920x822",
          feedback: "N",
          tips: "Y",
          allowUse: "N",
          allowDownload: "Y",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("photos", null, {});
  },
};
