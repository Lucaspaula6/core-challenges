export const verifyCancelBooking = (item: any, order: any, created: any[]) => {
  const cancelBooking = item.cancelBooking;
  if (cancelBooking === null || cancelBooking === undefined) return created;

  console.log("cancelBooking:", cancelBooking);

  if (cancelBooking.flight !== null) {
    created = addFlight(item, order, created);
  } else if (cancelBooking.baggage !== null)
    created = addBaggage(item, order, created);

  return created;
};

const addFlight = (item: any, order: any, created: any[]) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport, index) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "CANCEL_FLIGHT",
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
          productType: "CANCEL_FLIGHT",
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
          productType: "BAGGAGE_CANCEL",
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
          productType: "BAGGAGE_CANCEL",
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

export default { verifyCancelBooking };
