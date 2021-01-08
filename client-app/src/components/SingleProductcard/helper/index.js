import { deleteProduct } from "../../../util/operations/product";
import { notifyUser } from "../../../util/helper-functions";
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

export const handleDeleteProduct = async (
  productData,
  setLoading,
  removeProduct,
  router
) => {
  setLoading(true);
  const response = await deleteProduct(productData);
  response && notifyUser(response);

  if (response.status) {
    await removeProduct(productData);
    router.push("/dashboard/products");
  }

  return setLoading(false);
};
