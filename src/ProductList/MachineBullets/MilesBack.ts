import { insert } from "./Inserter";

export const verifyMilesBackType = (item: any, order: any, created: any[]) => {
  const milesBack = item.milesBack?.type;
  if (!milesBack) return created;

  switch (milesBack) {
    case "BOOKING":
      return insert("MILES_BACK_BOOKING",  order, created, item);
    case "REGULARIZATION":
      return insert("MILES_BACK_REGULARIZATION",  order, created, item);
    case "__MILES_BACK_DEFAULT_KEY__":
      return insert("MILES_BACK",  order, created, item);
    default:
      return insert("MILES_BACK",  order, created, item);
  }
};
