import React from "react";
import { Link } from "react-router-dom";
const Deposit = () => {
  return (
    <section id="deposite">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-12">
            <div className="loan_header">
              <h2>Depozitlər</h2>
              <p>
                Banka yerləşdirdiyiniz yatırımlarınızı yüksək depozit faiz
                dərəcələrindən yararlanaraq daha gəlirli hala gətirin. Yüksək
                faizli depozit hesablarını vaxt itirmədən Kapital Bankdan
                asanlıqla əldə edin.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="large_card">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-5">
                  <div className="card_img">
                    <img
                      src="https://www.kapitalbank.az/images/deposits/M/kapital1644386804.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card_desc">
                    <h4>Kapital depoziti</h4>
                    <p>
                      Yüksək faiz əldə etməklə yanaşı müddətin yarısınadək
                      məbləğı artırın.
                    </p>
                    <div className="buttons">
                      <Link>Sifariş et</Link>
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
                <h4>Müddətsiz depozit</h4>
                <p>Müddətsiz əmanətə yatırıb istədəyiniz zaman çıxarın.</p>
                <div className="buttons">
                  <a href="">Daha ətraflı</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/deposits/M/deposit-safes1582130957.png"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Depozit seyfləri</h4>
                <p>Depozitinizi bankımızın seyflərinə yerləşdirin</p>
                <div className="buttons">
                  <a href="">Daha ətraflı</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 g-4">
            <div className="loan_card">
              <div className="card_img">
                <img
                  src="https://www.kapitalbank.az/images/insurance/version_8/gelirlisigorta1640713630.webp"
                  alt=""
                />
              </div>
              <div className="card_desc">
                <h4>Gəlirli Həyat sığortası</h4>
                <p>
                  "Gəlirli Həyat sığortası" PAŞA Həyat Sığorta ilə birlikdə
                  hazırlanmış xüsusi məhsuldur. Sığorta məhsulunun yüksək faiz
                  dərəcələrindən yararlanın və həyat sığortası əldə edin.
                </p>
                <div className="buttons">
                  <a href="">Daha ətraflı</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deposit;
