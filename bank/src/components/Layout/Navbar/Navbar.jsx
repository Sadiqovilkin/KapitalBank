import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Navbar = () => {
  const [navbar, setnavbar] = React.useState("opennavbar");
  return (
    <header>
      <div className="container-lg container-fluid-md">
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
            <div className="mobile_items">
              <div className="icon">
                <img
                  src="https://www.kapitalbank.az/assets/static/img/birbanklogo-mobile.svg"
                  alt=""
                />
              </div>
              <div className="icon">
                <svg
                  role="img"
                  aria-label="BirBank"
                  width="18"
                  height="14"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setnavbar("opennavbar")}
                >
                  {" "}
                  <path
                    d="M16.4789 6.37992H1.52124C0.681181 6.37992 6.10352e-05 7.06806 6.10352e-05 7.91694C6.10352e-05 8.76582 0.681181 9.61992 1.52124 9.61992H16.4789C17.3189 9.61992 18.0001 8.76564 18.0001 7.91694C18.0001 7.06824 17.3189 6.37992 16.4789 6.37992ZM1.52124 4.21992H16.4789C17.3189 4.21992 18.0001 3.36564 18.0001 2.51694C18.0001 1.66824 17.3189 0.979919 16.4789 0.979919H1.52124C0.681181 0.979919 6.10352e-05 1.66806 6.10352e-05 2.51694C6.10352e-05 3.36582 0.681181 4.21992 1.52124 4.21992ZM16.4789 11.7799H1.52124C0.681181 11.7799 6.10352e-05 12.4681 6.10352e-05 13.3169C6.10352e-05 14.1658 0.681181 15.0199 1.52124 15.0199H16.4789C17.3189 15.0199 18.0001 14.1656 18.0001 13.3169C18.0001 12.4682 17.3189 11.7799 16.4789 11.7799Z"
                    fill="white"
                  ></path>{" "}
                  <svg
                    role="img"
                    aria-label="BirBank"
                    width="18"
                    height="14"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="M16.4789 6.37992H1.52124C0.681181 6.37992 6.10352e-05 7.06806 6.10352e-05 7.91694C6.10352e-05 8.76582 0.681181 9.61992 1.52124 9.61992H16.4789C17.3189 9.61992 18.0001 8.76564 18.0001 7.91694C18.0001 7.06824 17.3189 6.37992 16.4789 6.37992ZM1.52124 4.21992H16.4789C17.3189 4.21992 18.0001 3.36564 18.0001 2.51694C18.0001 1.66824 17.3189 0.979919 16.4789 0.979919H1.52124C0.681181 0.979919 6.10352e-05 1.66806 6.10352e-05 2.51694C6.10352e-05 3.36582 0.681181 4.21992 1.52124 4.21992ZM16.4789 11.7799H1.52124C0.681181 11.7799 6.10352e-05 12.4681 6.10352e-05 13.3169C6.10352e-05 14.1658 0.681181 15.0199 1.52124 15.0199H16.4789C17.3189 15.0199 18.0001 14.1656 18.0001 13.3169C18.0001 12.4682 17.3189 11.7799 16.4789 11.7799Z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </svg>
              </div>
              <div className={navbar}>
                <div className="container-fluid py-3">
                  <div className="row border-bottom">
                    <div className="col-4">
                      <div className="mobile_btn">
                        <ul>
                          <li>
                            <a className="active_btn" href="#">
                              AZ
                            </a>
                          </li>
                          <li>
                            <a href="#">EN</a>
                          </li>
                          <li>
                            <a href="#">RU</a>
                          </li>
                          <li>
                            <a className="svg" href="#">
                              <AiOutlineSearch />
                            </a>
                          </li>
                          <li>
                            {" "}
                            <AiOutlineCloseCircle
                              onClick={() => setnavbar("navbar")}
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row py-3">
                    <div className="col-4">
                      <div className="mobile_list_a">
                        <a href="#" className="active_a">
                          {" "}
                          Fiziki şəxslər üçün{" "}
                        </a>
                        <a href=""> Biznes üçün </a>
                      </div>
                      <div className="mobile_list_accardion">
                        <div
                          class="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                KARTLAR
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body">
                                <ul>
                                  <li className="dark_li">Butun Kartlar</li>
                                  <li className="dark_li">Taksit Kartlar</li>
                                  <li className="dark_li">Depet Kartlar</li>
                                  <li className="dark_li">Digital Kartlar</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                              >
                                KREDİTLƏR
                              </button>
                            </h2>
                            <div
                              id="flush-collapseTwo"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body">
                                <ul>
                                  <li className="dark_li">Butun Kreditler</li>
                                  <li className="dark_li">
                                    Gundelik Kreditler
                                  </li>
                                  <li>Mikro Biznes Kreditler</li>
                                  <li>Teminat manat Kreditler</li>
                                  <li> Emanet Kreditler</li>
                                  <li>Avtomobil Kreditler</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <a href="#">İPOTEKALAR</a>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                DEPOZİTLƏR
                              </button>
                            </h2>
                            <div
                              id="flush-collapseThree"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body">
                                <ul>
                                  <li className="dark_li">Butun Kreditler</li>
                                  <li className="dark_li">
                                    Gundelik Kreditler
                                  </li>
                                  <li>Mikro Biznes Kreditler</li>
                                  <li>Teminat manat Kreditler</li>
                                  <li> Emanet Kreditler</li>
                                  <li>Avtomobil Kreditler</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                PUL KÖÇÜRMƏLƏRİ
                              </button>
                            </h2>
                            <div
                              id="flush-collapseFour"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body">
                                <ul>
                                  <li className="dark_li">Butun Kreditler</li>
                                  <li className="dark_li">
                                    Gundelik Kreditler
                                  </li>
                                  <li>Mikro Biznes Kreditler</li>
                                  <li>Teminat manat Kreditler</li>
                                  <li> Emanet Kreditler</li>
                                  <li>Avtomobil Kreditler</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                              >
                                ONLAYN XİDMƏTLƏR
                              </button>
                            </h2>
                            <div
                              id="flush-collapseFive"
                              class="accordion-collapse collapse"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div class="accordion-body">
                                <ul>
                                  <li className="dark_li">Butun Kreditler</li>
                                  <li className="dark_li">
                                    Gundelik Kreditler
                                  </li>
                                  <li>Mikro Biznes Kreditler</li>
                                  <li>Teminat manat Kreditler</li>
                                  <li> Emanet Kreditler</li>
                                  <li>Avtomobil Kreditler</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="acc_item">
                            <a href="#">KAMPANİYALAR</a>
                            <a href="#">FƏRDİ BANKÇILIQ</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <li id="list_kart">
                    <Link to="/cards">Kartlar</Link>
                    <div className="hover_list" id="kart">
                      <div className="container py-4">
                        <div className="row pt-3">
                          <div className="col-7">
                            <div className="row">
                              <div className="col-5">
                                <ul>
                                  <li id="activate">
                                    Birbank Cashback ilə ƏDV-ni 2 qat geri al!
                                  </li>
                                  <li>
                                    <Link to="/cards/cashback">
                                      Taksit kartlar
                                    </Link>
                                  </li>
                                  <li>Debet kartlar</li>
                                  <li>Digital kart</li>
                                </ul>
                              </div>
                              <div className="col-4">
                                <ul>
                                  <li>Hediyye karti</li>
                                  <li>Kartın müddətinin uzadılması</li>
                                  <li>Kartlar üzrə xidmətlər</li>
                                  <li>Təhlükəsizlik qaydaları</li>
                                </ul>
                              </div>
                              <div className="col-3">
                                <ul>
                                  <li>3D secure</li>
                                  <li>Kart sifarişi</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <div className="content">
                                  <h3>Birbank Cashback</h3>
                                  <p>
                                    Kartla edilən nağdsız ödənişlərə minimum
                                    1.5%-dən başlayan keşbek, faizsiz və
                                    komissiyasız taksit imkanı verən unikal bir
                                    kartdır.
                                  </p>
                                  <a href="#">Bir kliklə sifariş et</a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card_image">
                                  <img
                                    src="https://www.kapitalbank.az/images/cards/D/birbank-cashback-debet1656680037.png?v=3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="list_loan">
                    <Link to="/loans">KREDİTLƏR</Link>
                    <div className="hover_list" id="loan">
                      <div className="container py-4">
                        <div className="row pt-3">
                          <div className="col-7">
                            <div className="row">
                              <div className="col-5">
                                <ul>
                                  <li id="activate">
                                    Nağd kredit alın, lotereyada şans qazanın!
                                  </li>
                                  <li>Gündəlik tələbat krediti</li>
                                  <li>Mikro Biznes Kreditləri</li>
                                  <li>Təminatlı manat krediti</li>
                                </ul>
                              </div>
                              <div className="col-5">
                                <ul>
                                  <li>Əmanət təminatlı kredit</li>
                                  <li>Daşınmaz əmlak təminatlı kredit</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <div className="content">
                                  <h3>
                                    Gündəlik <br />
                                    <strong>tələbat krediti</strong>
                                  </h3>
                                  <p>30000 AZN dək Gündəlik tələbat krediti</p>
                                  <a href="#">Bir kliklə sifariş et</a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card_image">
                                  <img
                                    src="https://www.kapitalbank.az/assets/static/img/main-page/daily-loan3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link>İPOTEKALAR</Link>
                  </li>
                  <li id="list_deposite">
                    <Link to="/deposits">DEPOZİTLƏR</Link>
                    <div className="hover_list" id="deposite">
                      <div className="container py-4">
                        <div className="row pt-3">
                          <div className="col-7">
                            <div className="row">
                              <div className="col-3">
                                <ul>
                                  <li>
                                    {" "}
                                    <Link>Kapital depoziti</Link>
                                  </li>
                                  <li>Müddətsiz depozit</li>
                                  <li>Depozit seyfləri</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <div className="content">
                                  <h3>Kapital depoziti</h3>
                                  <p>
                                    Yüksək faiz əldə etməklə yanaşı müddətin
                                    yarısınadək məbləğı artırın.
                                  </p>
                                  <a href="#">Bir kliklə sifariş et</a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card_image">
                                  <img
                                    src="https://www.kapitalbank.az/assets/static/img/menu/deposits.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="list_transfer">
                    <Link to="/transfers">PUL KÖÇÜRMƏLƏRİ</Link>
                    <div className="hover_list" id="transfer">
                      <div className="container py-4">
                        <div className="row pt-3">
                          <div className="col-7">
                            <div className="row">
                              <div className="col-6">
                                <ul>
                                  <li id="activate">
                                    Birbank ilə istənilən karta pul köçürün!
                                  </li>
                                  <li>Xəzri</li>
                                  <li>Zolotaya Korona</li>
                                  <li>Western Union</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <div className="content">
                                  <h3>Birbank</h3>
                                  <p>
                                    Birbankla istənilən karta pul köçürün! Artıq
                                    Birbankla telefonunuzdan istənilən bank
                                    kartına asanlıqla pul göndərə bilərsiniz.
                                  </p>
                                  <a href="#">Bir kliklə sifariş et</a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card_image">
                                  <img
                                    src="https://www.kapitalbank.az/assets/static/img/menu/bblogo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li id="list_order">
                    <Link to="/orders">ONLAYN XİDMƏTLƏR</Link>
                    <div className="hover_list" id="order">
                      <div className="container py-4">
                        <div className="row pt-3">
                          <div className="col-7">
                            <div className="row">
                              <div className="col-4">
                                <ul>
                                  <li>Kart sifarişi</li>
                                  <li>Kredit sifarişi</li>
                                  <li>Kredit ödənişi</li>
                                  <li>Kommunal ödənişlər</li>
                                </ul>
                              </div>
                              <div className="col-4">
                                <ul>
                                  <li>Onlayn növbə</li>
                                  <li>Arayış və çıxarışların alınması</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                <div className="content">
                                  <h3>Birbank Cashback</h3>
                                  <p>
                                    Kartla edilən nağdsız ödənişlərə minimum
                                    1.5%-dən başlayan keşbek, faizsiz və
                                    komissiyasız taksit imkanı verən unikal bir
                                    kartdır.
                                  </p>
                                  <a href="#">Bir kliklə sifariş et</a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="card_image">
                                  <img
                                    src="https://www.kapitalbank.az/images/cards/D/birbank-cashback-debet1656680037.png?v=3"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
      <div className="mobile_navbar"></div>
    </header>
  );
};

export default Navbar;
