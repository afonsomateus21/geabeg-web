import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Layout } from "./pages/layout";
import { Products } from "./pages/products";
import { Scouts } from "./pages/scouts";
import { ScoutAction } from "./pages/ScoutAction";

const router = createBrowserRouter([
  { path: "/", 
    Component: Layout,
    children: [
      { path: "", Component: Home },
      { path: "produtos", Component: Products },
      { path: "escoteiros", Component: Scouts },
      { path: "escoteiros/registrar", Component: ScoutAction }
    ] 
  },
]);

export { router };