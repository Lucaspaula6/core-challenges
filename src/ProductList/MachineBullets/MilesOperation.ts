import { insert } from "./Inserter";

export const verifyMilesOperation = (item: any, order: any, created: any[]) => {
  const operation = item.miles?.operation;
  if (!operation) return created;
  switch (operation) {
    case "PURCHASE":
      return insert("PURCHASE", order, created, item);
    case "REVALIDATION":
      return insert("MILES_REVALIDATION", order, created, item);
    case "TRANSFER":
      return insert("MILES_TRANSFER", order, created, item);
    case "EXTENSION":
      return insert("MILES_EXTENSION", order, created, item);
    case "EXTEND":
      return insert("MILES_EXTENSION", order, created, item);
  }
};
