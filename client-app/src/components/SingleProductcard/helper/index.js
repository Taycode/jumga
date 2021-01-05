import { sampleProducts } from "../../../util/static-data";
import { deleteProduct } from "../../../util/operations/product";
import { notifyUser } from "../../../util/helper-functions";

export const formatGalleryimages = (product) => {
  const { image1, image2 } = sampleProducts[0];

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
