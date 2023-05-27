import React from "react";
import { Link } from "react-router-dom";
const Loan = () => {
  return (
    <section id="loan">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-12">
            <div className="loan_header">
              <h2>Kreditlər</h2>
              <p>
                Kapital Bankın təklif etdiyi kredit çeşidləri ilə
                ehtiyaclarınızı təxirə salmadan qarşılayın. Pul krediti, maaş və
                ya pensiya kartları üçün kredit xətti, ipoteka krediti
                məhsullarından faydalanın. Aşağı faiz dərəcələrindən
                yararlanaraq xərclərinizi minimuma endirin.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="loan_large_card">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="card_img">
                    <img
                      src="https://www.kapitalbank.az/images/loans/M/cash1640262059.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card_desc">
                    <h4>Gündəlik tələbat krediti</h4>
                    <p>30000 AZN dək Gündəlik tələbat krediti</p>
                    <div className="buttons">
                      <a href="">Sifariş et</a>
                      <button>Daha ətraflı</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/loans/M/mikrokredit1640262722.png"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Mikro Biznes Kreditləri</h4>
                <p>
                  Bankımızın mikro-kreditləri ilə kiçik bizneslərə dəstəyik!
                </p>
                <div className="buttons">
                  <a href="">Sifariş et</a>
                  <button>Daha ətraflı</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/loans/M/tmk1574952791.png"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Təminatlı manat krediti</h4>
                <p>Dollar valyutasında sığorta əsasən verilən kredit</p>
                <div className="buttons">
                  <a href="">Sifariş et</a>
                  <button>Daha ətraflı</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/loans/M/etk1589475908.png"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Əmanət təminatlı kredit</h4>
                <p>Əmanət məbləğinin 80%-i həcmində kredit</p>
                <br />
                <div className="buttons">
                  <a href="">Sifariş et</a>
                  <button>Daha ətraflı</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/loans/M/avtomobil-krediti1681128102.jpg"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Avtomobil krediti</h4>
                <p>
                  Arzuladığınız avtomobili Kapital Bank-ın təqdim etdiyi
                  avtomobil krediti ilə əldə edin.
                </p>
                <div className="buttons">
                  <Link to="/loans/avtomobil-krediti">Sifariş et</Link>

                  <button>Daha ətraflı</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/loans/M/detk1639380241.png"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Daşınmaz əmlak təminatlı kredit</h4>
                <p>
                  Daşınmaz əmlakın təminat kimi qoyulması müqabilində 100 000
                  AZN-ə qədər verilən nağd pul krediti.
                </p>
                <div className="buttons">
                  <a href="">Sifariş et</a>
                  <button>Daha ətraflı</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;
