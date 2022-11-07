export const insert = (
  productType: string,
  order: any,
  created: any[],
  item: any
) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport, index) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType,
          status: getStatus(order, item),
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
          productType,
          status: getStatus(order, item),
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

const getStatus = (order: any, item: any) => {
  if (
    (item.miles &&
      // item.paymentData.gateway === "PIX" &&
      order.status === "PROCESSED" &&
      order.subStatus === "PROCESSED") ||
    order.subStatus === "PENDING_APPROVAL"
  ) {
    return "APPROVED";
  } else if (
    // (item.miles &&
    //   item.paymentData.gateway === "PIX" &&
    //   order.status === "CANCELLED") ||
    order.status === "CANCELLED"
  ) {
    return "CANCELLED";
  } else if (
    // (item.miles &&
    //   item.paymentData.gateway === "PIX" &&
    //   order.status != "PROCESSED" &&
    //   order.status != "CANCELLED") ||
    order.subStatus === "PENDING_PAYMENT"
  ) {
    return "PENDING";
  } else if (order.status === "PROCESSED") {
    // console.log(order.status);
    return "CONCLUDED";
  } else return "RECEIVED";
};
