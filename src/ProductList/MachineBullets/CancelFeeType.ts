export const verifyCancelFeeType = (item: any, order: any, created: any[]) => {
  const cancelFeeType = item.cancelFee?.type;
  if (cancelFeeType === null || cancelFeeType === undefined) return created;

  console.log("cancelFeeType:", cancelFeeType);

  switch (cancelFeeType) {
    case "BOARDING":
      return addBooking(item, order, created);
    default:
      return created;
  }
};

const addBooking = (item: any, order: any, created: any[]) => {
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

export default { verifyCancelFeeType };
