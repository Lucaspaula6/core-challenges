import { insert } from "./Inserter";

export const verifyCancelProductType = (
  item: any,
  order: any,
  created: any[]
) => {
  const cancelProductType = item.cancelProduct?.type;
  if (!cancelProductType)
    return created;

  switch (cancelProductType) {
    case "TRAVEL_INSURANCE":
      return insert("TRAVEL_INSURANCE_CANCEL", order, created, item);
    case "UBER_CREDIT":
      return insert("UBER_CREDIT_CANCEL", order, created, item);
    case "UBER_PASS":
      return insert("UBER_PASS_CANCEL", order, created, item);
    case "LOCALIZA":
      return insert("LOCALIZA_CANCEL", order, created, item);
    case "CAR":
      return insert("LOCALIZA_CANCEL", order, created, item);

  }
};
