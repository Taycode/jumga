export const formatGalleryimages = (product) => {
  const { image1, image2 } = product;

  const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
  ];

  return images;
};
