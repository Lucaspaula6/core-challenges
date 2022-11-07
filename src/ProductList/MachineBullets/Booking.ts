import { insert } from "./Inserter";

export const verifyBooking = (item: any, order: any, created: any[]) => {
  const booking = item.booking;
  if (!booking) return created;

  if (booking.flight !== null)
    return insert("FLIGHT_BUY", order, created, item);

  if (booking.seat !== null) return insert("SEAT_BUY", order, created, item);

  if (booking.baggage !== null)
    return insert("BAGGAGE_BUY", order, created, item);
};
