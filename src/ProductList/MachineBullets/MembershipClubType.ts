export const verifyMembershipClubType = (
  item: any,
  order: any,
  created: any[]
) => {
  const membershipClubType = item.membership?.club?.type;
  if (membershipClubType === null || membershipClubType === undefined)
    return created;
  switch (membershipClubType) {
    case "UPGRADE":
      return addUpgrade(item, order, created);
    case "DOWNGRADE":
      return addDowngrade(item, order, created);
    case "MEMBERSHIP":
      return addMembership(item, order, created);
    case "__CLUB_SMILES_DEFAULT_KEY__":
      return addDefault(item, order, created);
    default:
      return addDefault(item, order, created);
  }
};

const addUpgrade = (item: any, order: any, created: any[]) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport, index) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "UPGRADE_CLUB_SMILES",
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
          productType: "UPGRADE_CLUB_SMILES",
          status: "APROVED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.money,
        money: order.totals.total.miles,
      },
    });
  }
  return created;
};

const addDowngrade = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "DOWNGRADE_CLUB_SMILES",
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
          productType: "DOWNGRADE_CLUB_SMILES",
          status: "APROVED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.money,
        money: order.totals.total.miles,
      },
    });
  }
  return created;
};
const addMembership = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "CLUB_SMILES",
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
          productType: "CLUB_SMILES",
          status: "APROVED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.money,
        money: order.totals.total.miles,
      },
    });
  }
  return created;
};
const addDefault = (item: any, order: any, created: any) => {
  let flag = true;
  if (created.length > 0) {
    created.forEach((orderReport: any, index: number) => {
      if (orderReport.items[0].orderId === order.orderId) {
        created[index].items.push({
          productType: "CLUB_SMILES",
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
          productType: "CLUB_SMILES",
          status: "APROVED",
          date: new Date(order.date),
          orderId: order.orderId,
        },
      ],
      value: {
        miles: order.totals.total.money,
        money: order.totals.total.miles,
      },
    });
  }
  return created;
};

export default { verifyMembershipClubType };
