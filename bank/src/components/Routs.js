import Kapital from "./Pages/Depozit-Kapital/Kapital";
import Deposits from "./Pages/Depozitler/Deposits";
import Home from "./Pages/Home/Home";
import Cashback from "./Pages/Kartlar-Cashback/Cashback";
import Cards from "./Pages/Kartlar/Cards";
import Loans from "./Pages/Kreditler/Loans";
import Transfers from "./Pages/Kocurmeler/Transfers";
import Orders from "./Pages/Xidmetler/Orders";
import Company from "./Pages/Kampaniya/Companys";
import Error from "./Pages/Error/Error";

const Routs = [
  {
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
  },
  {
    path: "/cards",
    exact: "true",
    component: <Cards />,
    fallback: <Cards />,
  },
  {
    path: "/cards/cashback",
    exact: "true",
    component: <Cashback />,
    fallback: <Cashback />,
  },
  {
    path: "/loans",
    exact: "true",
    component: <Loans />,
    fallback: <Loans />,
  },
  {
    path: "/deposits",
    exact: "true",
    component: <Deposits />,
    fallback: <Deposits />,
  },
  {
    path: "/deposits/kapital",
    exact: "true",
    component: <Kapital />,
    fallback: <Kapital />,
  },
  {
    path: "/transfers",
    exact: "true",
    component: <Transfers />,
    fallback: <Transfers />,
  },
  {
    path: "/orders",
    exact: "true",
    component: <Orders />,
    fallback: <Orders />,
  },
  {
    path: "/company",
    exact: "true",
    component: <Company />,
    fallback: <Company />,
  },
  {
    path: "*",
    exact: "true",
    component: <Error />,
    fallback: <Error />,
  },
];
export default Routs;
