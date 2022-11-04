export const verifyBooking = (item: any, order: any, created: any[]) => {
  const booking = item.booking;
  if (booking === null || booking === undefined) return created;

  console.log("booking:", booking);

  if (booking.flight !== null) {
    created = addFlight(item, order, created);
  } else if (booking.seat !== null) {
    created = addSeat(item, order, created);
  } else if (booking.baggage !== null)
    created = addBaggage(item, order, created);

  return created;
};

const addFlight = (item: any, order: any, created: any[]) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport, index) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "FLIGHT_BUY",
          status: "CONCLUDED",
          date: new Date(order.date),
          orderId: order.orderId,
        });
        created[index].value.money = order.totals.total.money;
        created[index].value.miles = order.totals.total.miles;
        flag = false;
      }
    });
  }
  if (flag) {
    created.push({
      items: [
        {
          productType: "FLIGHT_BUY",
          status: "CONCLUDED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.miles,
        money: order.totals.total.money,
      },
    });
  }
  return created;
};

const addSeat = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "SEAT_BUY",
          status: "CONCLUDED",
          date: new Date(order.date),
          orderId: order.orderId,
        });
        created[index].value.money = order.totals.total.money;
        created[index].value.miles = order.totals.total.miles;
        flag = false;
      }
    });
  }
  if (flag) {
    created.push({
      items: [
        {
          productType: "SEAT_BUY",
          status: "CONCLUDED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.miles,
        money: order.totals.total.money,
      },
    });
  }
  return created;
};
const addBaggage = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "BAGGAGE_BUY",
          status: "CONCLUDED",
          date: new Date(order.date),
          orderId: order.orderId,
        });
        created[index].value.money = order.totals.total.money;
        created[index].value.miles = order.totals.total.miles;
        flag = false;
      }
    });
  }
  if (flag) {
    created.push({
      items: [
        {
          productType: "BAGGAGE_BUY",
          status: "CONCLUDED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.miles,
        money: order.totals.total.money,
      },
    });
  }
  return created;
};

export default { verifyBooking };
