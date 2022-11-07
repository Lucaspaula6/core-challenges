import { describe } from "@jest/globals";
import request from "supertest";

import { ORDERS_FINAL_RESPONSE } from "../src/data/mockOrders";
import app from "../src/listen";
import Machine from "../src/ProductList/machine";

describe("Product List", () => {
  test("Expect test to be exatly equals to mock", async () => {
    // jest
    //   .spyOn(Machine, "productListMachine")
    //   .mockReturnValue(JSON.stringify(ORDERS_FINAL_RESPONSE));

    const response = await request(app).get("/api/productList");
    expect(JSON.stringify(response.body)).toBe(
      JSON.stringify(ORDERS_FINAL_RESPONSE)
    );
  });
});
