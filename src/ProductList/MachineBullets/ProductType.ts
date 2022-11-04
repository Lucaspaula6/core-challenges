export const verifyProductType = (item: any, order: any, created: any[]) => {
  const productType = item.product?.type;
  if (productType === null || productType === undefined) return created;

  console.log("productType:", productType);

  switch (productType) {
    case "TRAVEL_INSURANCE":
      return addTravelInsurance(item, order, created);
    case "UBER_CREDIT":
      return addUberCredit(item, order, created);
    case "UBER_PASS":
      return addUberPass(item, order, created);
    case "LOCALIZA":
      return addLocaliza(item, order, created);
    case "CAR":
      return addCar(item, order, created);
    default:
      return created;
  }
};

const addTravelInsurance = (item: any, order: any, created: any[]) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport, index) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "TRAVEL_INSURANCE_BUY",
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
          productType: "TRAVEL_INSURANCE_BUY",
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

const addUberCredit = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "UBER_CREDIT_BUY",
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
          productType: "UBER_CREDIT_BUY",
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
const addUberPass = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "UBER_PASS_BUY",
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
          productType: "UBER_PASS_BUY",
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
const addLocaliza = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "LOCALIZA_BUY",
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
          productType: "LOCALIZA_BUY",
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
const addCar = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "LOCALIZA_BUY",
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
          productType: "LOCALIZA_BUY",
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

export default { verifyProductType };
