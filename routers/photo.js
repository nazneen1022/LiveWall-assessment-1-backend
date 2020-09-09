const { Router } = require("express");
const Photo = require("../models").photo;

const router = new Router();

router.post("/uploadPhoto", async (request, response, next) => {
  const feedback = "N";
  const tips = "N";
  const allowUse = "N";
  const allowDownload = "N";
  //console.log("body:", request.body);
  const {
    title,
    description,
    location,
    tags,
    category,
    imageUrl,
  } = request.body;

  if (!title || !description || !imageUrl) {
    return response.status(404).send({
      message: "Title, description, image URL are required",
    });
  }

  const newPhoto = await Photo.create({
    title,
    description,
    location,
    tags,
    category,
    imageUrl,
    feedback,
    tips,
    allowUse,
    allowDownload,
  });

  if (!newPhoto) {
    return response.status(404).send({ message: "Cannot add photo" });
  }

  return response.status(200).send({ message: "new photo saved", newPhoto });
});
module.exports = router;
