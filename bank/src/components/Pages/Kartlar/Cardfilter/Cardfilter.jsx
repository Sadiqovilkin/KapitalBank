import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";

const Cardfilter = () => {
  const isotope = React.useRef();
  const [filterKey, setFilterKey] = React.useState("*");
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
    <section>
      <div className="container mt-2">
        <div className="row py-3">
          <div className="col-4">
            <h2 id="header">Kalkulyator</h2>
            <div className="btns">
              <button
                className=" button active"
                onClick={handleFilterKeyChange("*")}
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
      <div className="container-fluid filter-container">
        <div className="container filter-item a">A</div>
        <div className="container filter-item b">B</div>
        <div className="container filter-item c">C</div>
      </div>
    </section>
  );
};

export default Cardfilter;
