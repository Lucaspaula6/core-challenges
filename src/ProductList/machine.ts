// PEGAR DATA E MANDAR PARA O SERVICE
import { ORDERS } from "../data/mockOrders";
import { verifyFeeType } from "./MachineBullets/FeeType";
import { verifyMilesOperation } from "./MachineBullets/MilesOperation";
import { verifyProductType } from "./MachineBullets/ProductType";
import { verifyCancelProductType } from "./MachineBullets/CancelProductType";
import { verifyMilesBackType } from "./MachineBullets/MilesBack";
import { verifyCancelFeeType } from "./MachineBullets/CancelFeeType";
import { verifyMembershipClubType } from "./MachineBullets/MembershipClubType";
import { verifyBooking } from "./MachineBullets/Booking";
import { verifyCancelBooking } from "./MachineBullets/CancelBooking";

const productListMachine = () => {
  // Aqui deveremos fazer a logica para resolver o problema
  const data = ORDERS.orderList;
  let created: any = [];
  for (const order of data) {
    order.itemList.forEach((item: any) => {
      created = verifyFeeType(item, order, created);
      created = verifyMilesOperation(item, order, created);
      created = verifyProductType(item, order, created);
      created = verifyCancelProductType(item, order, created); //NÃO TEM NENHUM
      created = verifyMilesBackType(item, order, created);
      created = verifyCancelFeeType(item, order, created);
      created = verifyMembershipClubType(item, order, created);
      created = verifyBooking(item, order, created);
      created = verifyCancelBooking(item, order, created);
    });
  }
  console.log("created");
  console.log(created);
  return created;
};

export default { productListMachine };
