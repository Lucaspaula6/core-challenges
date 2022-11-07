import { insert } from "./Inserter";

export const verifyFeeType = (item: any, order: any, created: any[]) => {
  const feeType = item.fee?.type;
  if (!feeType) return created;
  switch (feeType) {
    case "BOARDING":
      return insert("BOARDING",  order, created, item);
    case "CANCELLATION":
      return insert("CANCEL_FLIGHT",  order, created, item);
    case "CONVENIENCE":
      return insert("CONVENIENCE_TAX",  order, created, item);
    case "NO_MILES_BOOKING":
      return insert("NO_MILES_BOOKING",  order, created, item);
    case "RESERVATION":
      return insert("RESERVATION",  order, created, item);

  }
};

