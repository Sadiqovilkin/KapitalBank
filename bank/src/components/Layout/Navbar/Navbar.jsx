import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-3">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://www.kapitalbank.az/assets/static/img/content/elements/svg/Logo--main.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-9">
            <div className="header_items">
              <ul>
                <li> Fiziki şəxslər üçün</li>
                <li> Biznes üçün</li>
                <li>
                  <i className="bi bi-geo-alt-fill"></i>Xidmət şəbəkəsi
                </li>
                <li>EN</li>
                <li>Ru</li>
                <li>
                  <div className="icon">
                    <i className="bi bi-search"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-around">
            <div className="col-9">
              <div className="nav_items">
                <ul>
                  <li>
                    <Link to="/cards">Kartlar</Link>
                  </li>
                  <li>
                    <Link to="/loans">KREDİTLƏR</Link>
                  </li>
                  <li>
                    <Link to="*">İPOTEKALAR</Link>
                  </li>
                  <li>
                    <Link to="/deposits">DEPOZİTLƏR</Link>
                  </li>
                  <li>
                    <Link to="/transfers">PUL KÖÇÜRMƏLƏRİ</Link>
                  </li>
                  <li>
                    <Link to="/orders">ONLAYN XİDMƏTLƏR</Link>
                  </li>
                  <li>
                    <Link to="/company">KAMPANİYALAR</Link>
                  </li>
                  <li>
                    <Link to="*">FƏRDİ BANKÇILIQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="nav_btn">
                <Link to="\">birbank</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
