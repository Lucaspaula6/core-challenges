import { insert } from "./Inserter";

export const verifyProductType = (item: any, order: any, created: any[]) => {
  const productType = item.product?.type;
  if (!productType) return created;

  switch (productType) {
    case "TRAVEL_INSURANCE":
      return insert("TRAVEL_INSURANCE_BUY", order, created, item);
    case "UBER_CREDIT":
      return insert("UBER_CREDIT_BUY", order, created, item);
    case "UBER_PASS":
      return insert("UBER_PASS_BUY", order, created, item);
    case "LOCALIZA":
      return insert("LOCALIZA_BUY", order, created, item);
    case "CAR":
      return insert("LOCALIZA_BUY", order, created, item);
  }
};

