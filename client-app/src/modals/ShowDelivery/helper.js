import { deliveryStatusMap } from "../../util/constants";
import { notifyUser } from "../../util/helper-functions";
import { updateDeliveryStatus } from "../../util/operations/deliveries";

const getNextStatus = (currentStatus) => {
  const statuses = Object.keys(deliveryStatusMap);

  const currntstatusIndex = statuses.indexOf(currentStatus);

  return statuses[currntstatusIndex + 1];
};

export const updateTextMap = {
  in_shop: "Package collected",
  enroute_destination: "Package delivered",
  delivered: "Delivery completed",
};

export const handleUpdateDelivery = async (
  delivery,
  setLoading,
  updateDeliveries,
  setShowModal
) => {
  setLoading(true);
  const { id, status } = delivery;
  const nextStatus = await getNextStatus(status);

  const updatedata = {
    id,
    status: nextStatus,
  };

  const response = await updateDeliveryStatus(updatedata);

  response && notifyUser(response);

  if (response.status) {
    await updateDeliveries({ ...delivery, ...updatedata });
    setShowModal({
      show: false,
    });
  }

  setLoading(false);
};
