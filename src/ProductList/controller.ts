import { Request, Response } from "express";

import Machine from "./machine";

const productList = (request: Request, response: Response) => {
  const formatedData = Machine.productListMachine();
  // console.log({ formatedData });

  response.status(200).json(formatedData);
};

export default { productList };
