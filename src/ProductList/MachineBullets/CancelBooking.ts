import { insert } from "./Inserter";

export const verifyCancelBooking = (item: any, order: any, created: any[]) => {
  const cancelBooking = item.cancelBooking;
  if (!cancelBooking) return created;

  if (cancelBooking.flight !== null)
    return insert("CANCEL_FLIGHT", order, created, item);

  if (cancelBooking.baggage !== null)
    return insert("BAGGAGE_CANCEL", order, created, item);
};
