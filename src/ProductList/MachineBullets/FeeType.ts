export const verifyFeeType = (item: any, order: any, created: any[]) => {
  const feeType = item.fee?.type;
  if (feeType === null || feeType === undefined) return created;
  console.log("feeType:", feeType);
  switch (feeType) {
    case "BOARDING":
      return addBoarding(item, order, created);
    case "CANCELLATION":
      return addCancel(item, order, created);
    case "CONVENIENCE":
      return addConvenience(item, order, created);
    case "NO_MILES_BOOKING":
      return addNoMilesBooking(item, order, created);
    case "RESERVATION":
      return addReservation(item, order, created);
    default:
      return created;
  }
};

const addBoarding = (item: any, order: any, created: any[]) => {
  if (
    created.length > 0 &&
    created[created.length - 1].items[0].orderId === order.orderId
  ) {
    created[created.length - 1].items.push({
      productType: "BOARDING",
      status: "CONCLUDED",
      date: new Date(order.date),
      orderId: order.orderId,
    });
    created[created.length - 1].value.miles = order.totals.total.miles;
    created[created.length - 1].value.money = order.totals.total.money;
  } else {
    created.push({
      items: [
        {
          productType: "BOARDING",
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
const addCancel = (item: any, order: any, created: any) => {
  if (
    created.length > 0 &&
    created[created.length - 1].items[0].orderId === order.orderId
  ) {
    console.log(created[created.length - 1].items);
    created[created.length - 1].items.push({
      productType: "CANCEL_FLIGHT",
      status: "CONCLUDED",
      date: new Date(order.date),
      orderId: order.orderId,
    });
    created[created.length - 1].value.miles = order.totals.total.miles;
    created[created.length - 1].value.money = order.totals.total.money;
  } else {
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
const addConvenience = (item: any, order: any, created: any) => {
  if (
    created.length > 0 &&
    created[created.length - 1].items[0].orderId === order.orderId
  ) {
    created[created.length - 1].items.push({
      productType: "CONVENIENCE_TAX",
      status: "CONCLUDED",
      date: new Date(order.date),
      orderId: order.orderId,
    });
    created[created.length - 1].value.miles = order.totals.total.miles;
    created[created.length - 1].value.money = order.totals.total.money;
  } else {
    created.push({
      items: [
        {
          productType: "CONVENIENCE_TAX",
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
const addNoMilesBooking = (item: any, order: any, created: any) => {
  if (
    created.length > 0 &&
    created[created.length - 1].items[0].orderId === order.orderId
  ) {
    created[created.length - 1].items.push({
      productType: "NO_MILES_BOOKING",
      status: "CONCLUDED",
      date: new Date(order.date),
      orderId: order.orderId,
    });
    created[created.length - 1].value.miles = order.totals.total.miles;
    created[created.length - 1].value.money = order.totals.total.money;
  } else {
    created.push({
      items: [
        {
          productType: "NO_MILES_BOOKING",
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
const addReservation = (item: any, order: any, created: any) => {
  if (
    created.length > 0 &&
    created[created.length - 1].items[0].orderId === order.orderId
  ) {
    created[created.length - 1].items.push({
      productType: "RESERVATION",
      status: "CONCLUDED",
      date: new Date(order.date),
      orderId: order.orderId,
    });
    created[created.length - 1].value.miles = order.totals.total.miles;
    created[created.length - 1].value.money = order.totals.total.money;
  } else {
    created.push({
      items: [
        {
          productType: "RESERVATION",
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

export default { verifyFeeType };
