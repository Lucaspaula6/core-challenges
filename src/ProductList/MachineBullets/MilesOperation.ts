export const verifyMilesOperation = (item: any, order: any, created: any[]) => {
  const operation = item.miles?.operation;
  if (operation === null || operation === undefined) return created;
  console.log("operation:", operation);
  switch (operation) {
    case "PURCHASE":
      return addPurchase(item, order, created);
    case "REVALIDATION":
      return addRevalidation(item, order, created);
    case "TRANSFER":
      return addTransfer(item, order, created);
    case "EXTENSION":
      return addExtension(item, order, created);
    case "EXTEND":
      return addExtend(item, order, created);
    default:
      return created;
  }
};

const addPurchase = (item: any, order: any, created: any[]) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport, index) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "PURSHASE",
          status: "APROVED",
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
          productType: "PURSHASE",
          status: "APROVED",
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

const addRevalidation = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "MILES_REVALIDATION",
          status: "APROVED",
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
          productType: "MILES_REVALIDATION",
          status: "APROVED",
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
const addTransfer = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "MILES_TRANSFER",
          status: "APROVED",
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
          productType: "MILES_TRANSFER",
          status: "APROVED",
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
const addExtension = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "MILES_EXTENSION",
          status: "APROVED",
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
          productType: "MILES_EXTENSION",
          status: "APROVED",
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
const addExtend = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "MILES_EXTENSION",
          status: "APROVED",
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
          productType: "MILES_EXTENSION",
          status: "APROVED",
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

export default { verifyMilesOperation };
