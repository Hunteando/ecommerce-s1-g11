import { useState } from "react";
import data from "../mock/PinturasEcommerce";
import { ProductsI } from "../interfaces/ProductsI";

const useMock = () => {
  const [mockPinturas, setMockPinturas] = useState(data);
  return mockPinturas;
};
export default useMock;
