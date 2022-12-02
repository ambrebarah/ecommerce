import Routing from "./Router";
import React from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "react-use-cart";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <Routing />
  </CartProvider>
);
