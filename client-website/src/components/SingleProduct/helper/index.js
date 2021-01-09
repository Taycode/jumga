import { CLOUDINARY_IMAGE_PREPEND } from "../../../util/constants";

export const formatGalleryimages = (product) => {
  const { images } = product;

  const imagesArray = [];

  for (let i = 0; i < images.length; i++) {
    const imageData = {
      original: `${CLOUDINARY_IMAGE_PREPEND}${images[i].image}`,
      thumbnail: `${CLOUDINARY_IMAGE_PREPEND}${images[i].image}`,
    };

    imagesArray.push(imageData);
  }

  return imagesArray;
};
