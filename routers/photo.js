const { Router } = require("express");
const Photo = require("../models").photo;

const router = new Router();

router.post("/", auth, async (request, response, next) => {
  const {
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
