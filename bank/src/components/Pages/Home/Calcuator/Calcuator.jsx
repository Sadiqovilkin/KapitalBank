import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const Calcuator = () => {
  const isotope = React.useRef();
  const [filterKey, setFilterKey] = React.useState("a");
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const [price, setPrice] = React.useState(10000);
  const [percent, setpercent] = React.useState(15);
  const [month, setmonth] = React.useState(3);
  const [payment, setPayment] = React.useState(5000);

  const [cardprice, setCardPrice] = React.useState(2500);
  const [cardmont, setCardmont] = React.useState(11);
  const [cardvalue, setCardvalue] = React.useState(1025);

  const [depprice, setDepPrice] = React.useState(2500);
  const [depmont, setDepmont] = React.useState(11);
  const [depvalue, setDepvalue] = React.useState(1025);
  function summary() {
    let a = Number(price);
    let b = Number(percent);
    let c = Number(month);
    let Sum = (a / 100) * b + a;
    const Sum2 = Math.floor(Sum / c);
    setPayment(Sum2);
  }
  function CardSum(params) {
    let a = Number(cardprice);
    let b = Number(cardmont);
    const Sum2 = Math.floor(a / b);
    setCardvalue(Sum2);
  }
  function DepSum(params) {
    let a = Number(depprice);
    let b = Number(depmont);
    const Sum2 = Math.floor(a / b);
    setDepvalue(Sum2);
  }

  useEffect(() => {
    summary();
    CardSum();
    DepSum();
  }, [price, percent, month, cardprice, cardmont, depprice, depmont]);

  // clicked button add activeclass
  var btnContainer = document.querySelector(".btns");
  if (btnContainer) {
    var btns = btnContainer.getElementsByClassName("button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  return (
    <section id="calcuator">
      <div className="container mt-2">
        <div className="row py-3">
          <div className="col-4">
            <h2 id="header">Kalkulyator</h2>
            <div className="btns">
              <button
                className=" button active"
                onClick={handleFilterKeyChange("a")}
              >
                Kredit
              </button>
              <button className="button" onClick={handleFilterKeyChange("b")}>
                Birbank kartı
              </button>
              <button className="button" onClick={handleFilterKeyChange("c")}>
                Depozit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container filter-container">
        <div className="row filter-item a">
          <div className=" col-lg-8 col-sm-12 g-5">
            <div className="loan_calcuate">
              <div className="desc">
                <h5>Gündəlik tələbat krediti</h5>
                <p>
                  Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit
                  təklif edirik.
                </p>
                <p>% dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq</p>
              </div>
              <div className="forms">
                <div className="range_design">
                  <div className="value">
                    <h6>Mebleg</h6>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <input
                    max="30000"
                    min="300"
                    type="range"
                    className="styled-range"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <div className="range_values">
                    <span>300</span>
                    <span>30 000</span>
                  </div>
                </div>
                <div className="range_design">
                  <div className="value">
                    <h6>Faiz</h6>
                    <input
                      type="text"
                      value={percent}
                      onChange={(e) => setpercent(e.target.value)}
                    />
                  </div>
                  <input
                    max="20"
                    min="12"
                    type="range"
                    className="styled-range"
                    value={percent}
                    onChange={(e) => setpercent(e.target.value)}
                  />
                  <div className="range_values">
                    <span>12 %</span>
                    <span>20 %</span>
                  </div>
                </div>
                <div className="range_design">
                  <div className="value">
                    <h6>Muddet</h6>
                    <input
                      type="text"
                      value={month}
                      onChange={(e) => setmonth(e.target.value)}
                    />
                  </div>
                  <input
                    max="59"
                    min="3"
                    type="range"
                    className="styled-range"
                    value={month}
                    onChange={(e) => setmonth(e.target.value)}
                  />
                  <div className="range_values">
                    <span>3 ay</span>
                    <span>59 ay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 g-5">
            <div className="calcuator_sum">
              <h3>Nağd pul krediti üçün aylıq ödəniş</h3>
              <h2>
                <span id="monthly_payment">{payment}</span>
                <span>₼</span>
              </h2>
              <button>Sifaris Et</button>
            </div>
          </div>
        </div>
        <div className="row filter-item b">
          <div className=" col-lg-8 col-sm-12 g-5">
            <div className="loan_calcuate">
              <div className="desc">
                <h5>Birbank kartı</h5>
                <p>
                  Müştərilərimizə asanlıqla əldə edə biləcəkləri taksit kartı
                  təklif edirik.
                </p>
              </div>
              <div className="forms">
                <div className="range_design">
                  <div className="value">
                    <h6>Mebleg</h6>
                    <input
                      type="text"
                      value={cardprice}
                      onChange={(e) => setCardPrice(e.target.value)}
                    />
                  </div>
                  <input
                    max="30000"
                    min="300"
                    type="range"
                    className="styled-range"
                    value={cardprice}
                    onChange={(e) => setCardPrice(e.target.value)}
                  />
                  <div className="range_values">
                    <span>500</span>
                    <span>10 000</span>
                  </div>
                </div>
                <div className="range_design">
                  <div className="value">
                    <h6>Muddet</h6>
                    <input
                      type="text"
                      value={cardmont}
                      onChange={(e) => setCardmont(e.target.value)}
                    />
                  </div>
                  <input
                    max="24"
                    min="3"
                    type="range"
                    className="styled-range"
                    value={cardmont}
                    onChange={(e) => setCardmont(e.target.value)}
                  />
                  <div className="range_values">
                    <span>3 ay</span>
                    <span>24 ay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 g-5">
            <div className="calcuator_sum">
              <h3>Nağd pul krediti üçün aylıq ödəniş</h3>
              <h2>
                <span id="monthly_payment">{cardvalue}</span>
                <span>₼</span>
              </h2>
              <button>Sifaris Et</button>
            </div>
          </div>
        </div>
        <div className="row filter-item c">
          <div className=" col-lg-8 col-sm-12 g-5">
            <div className="loan_calcuate">
              <div className="desc">
                <h5>Kapital depoziti kalkulyatoru</h5>
                <p>
                  Kapital əmanəti ilə yüksək faiz əldə etməklə yanaşı müddətin
                  yarısınadək məbləğı artıra bilərsiniz.
                </p>
              </div>
              <div className="forms">
                <div className="range_design">
                  <div className="value">
                    <h6>Mebleg</h6>
                    <input
                      type="text"
                      value={depprice}
                      onChange={(e) => setDepPrice(e.target.value)}
                    />
                  </div>
                  <input
                    max="30000"
                    min="300"
                    type="range"
                    className="styled-range"
                    value={depprice}
                    onChange={(e) => setDepPrice(e.target.value)}
                  />
                  <div className="range_values">
                    <span>500</span>
                    <span>10 000</span>
                  </div>
                </div>
                <div className="range_design">
                  <div className="value">
                    <h6>Muddet</h6>
                    <input
                      type="text"
                      value={depmont}
                      onChange={(e) => setDepmont(e.target.value)}
                    />
                  </div>
                  <input
                    max="24"
                    min="3"
                    type="range"
                    className="styled-range"
                    value={depmont}
                    onChange={(e) => setDepmont(e.target.value)}
                  />
                  <div className="range_values">
                    <span>3 ay</span>
                    <span>24 ay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 g-5">
            <div className="calcuator_sum">
              <h3>Nağd pul krediti üçün aylıq ödəniş</h3>
              <h2>
                <span id="monthly_payment">{depvalue}</span>
                <span>₼</span>
              </h2>
              <button>Sifaris Et</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calcuator;

/* 

    contructor
    render
    useffect

*/
