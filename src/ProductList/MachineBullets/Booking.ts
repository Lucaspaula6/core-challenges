import { insert } from "./Inserter";

export const verifyBooking = (item: any, order: any, created: any[]) => {
  const booking = item.booking;
  if (!booking) return created;

  if (booking.flight) created = insert("FLIGHT_BUY", order, created, item);

  if (booking.seat) created = insert("SEAT_BUY", order, created, item);

  if (booking.baggage) created = insert("BAGGAGE_BUY", order, created, item);
  return created;
};
