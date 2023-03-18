import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
const Routs = [
  {
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
  },
  {
    path: "/about",
    exact: "true",
    component: <About />,
    fallback: <About />,
  },
];
export default Routs;
