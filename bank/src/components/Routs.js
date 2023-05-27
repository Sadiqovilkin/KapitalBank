import Deposits from "./Pages/Depozitler/Deposits";
import Home from "./Pages/Home/Home";
import Loans from "./Pages/Kreditler/Loans";
import Transfers from "./Pages/Kocurmeler/Transfers";
import Orders from "./Pages/Xidmetler/Orders";
import Company from "./Pages/Kampaniya/Companys";
import Error from "./Pages/Error/Error";
import Carloan from "./Pages/Cars_loan/Carloan";

const Routs = [
  {
    path: "/",
    exact: "true",
    component: <Home />,
    fallback: <Home />,
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
    path: "/loans/avtomobil-krediti",
    exact: "true",
    component: <Carloan />,
    fallback: <Carloan />,
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
