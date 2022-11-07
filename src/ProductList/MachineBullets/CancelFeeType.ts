import { insert } from "./Inserter";

export const verifyCancelFeeType = (item: any, order: any, created: any[]) => {
  const cancelFeeType = item.cancelFee?.type;
  if (!cancelFeeType) return created;

  switch (cancelFeeType) {
    case "BOARDING":
      return insert("CANCEL_FLIGHT",  order, created, item);

  }
};

