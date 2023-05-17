import React from "react";

const Campaigns = () => {
  return (
    <section id="campaigns">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-12">
            <div className="page_header">
              <h2>Kampaniyalar</h2>
              <p>
                Kapital Bankdan yenilənən kampaniyalar. Təkliflərdən xəbərdar
                olun, xüsusi fürsətlərdən faydalanın.
              </p>
            </div>
          </div>
          <div className="col-lg-12 g-5">
            <div className="large_card">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-3">
                  <div className="card_img">
                    <img
                      src="https://www.kapitalbank.az/images/campaigns/banner/bb-cashback-taksit-ilk-taksite-bonus-qazan-11681974109.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="card_desc">
                    <h4>
                      <strong>
                        Birbank Cashback Taksiti onlayn sifariş etmək 2 qat
                        sərfəlidir!
                      </strong>
                    </h4>
                    <ul className="campaigns__list">
                      {" "}
                      <li>
                        {" "}
                        <span>Pulsuz</span> Kartın qiyməti{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <span>2 QAT</span> ƏDV{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <span>30%-dək</span> Keşbek{" "}
                      </li>{" "}
                    </ul>
                    <div className="buttons">
                      <a>Sifariş et</a>
                      <button>Daha ətraflı</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 g-5">
            <div className="large_card">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-3">
                  <div className="card_img">
                    <img
                      src="https://www.kapitalbank.az/images/campaigns/banner/10000-azn-300-ode-11682678239.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="card_desc">
                    <h4>
                      <strong>
                        Mikro biznes kreditini sərfəli şərtlərlə əldə edin!{" "}
                      </strong>
                    </h4>
                    <ul className="campaigns__list">
                      {" "}
                      <li>
                        {" "}
                        <span>0 - 2 %</span> Komissiya{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <span>100 000 AZN-dək</span> Kredit məbləği{" "}
                      </li>{" "}
                      <li>
                        {" "}
                        <span>15%-dən başlayaraq</span> İllik faiz dərəcəsi{" "}
                      </li>{" "}
                    </ul>
                    <div className="buttons">
                      <a>Sifariş et</a>
                      <button>Daha ətraflı</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="campaigns_subscripe">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 g-3">
              <p>
                {" "}
                Kampaniyalardan ilk xəbərdar olmaq üçün elə indi abunə olun.{" "}
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 g-3">
              <form action="">
                <input type="text" placeholder="Elektron poçt ünvanı" />
                <button>abunə olmaq</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="campaigns_foot">
        <div className="container">
          <p className="camp_desc">
            "Kapital Bank" ASC Azərbaycan Republikasının Maliyyə Bazarlarına
            Nəzarət Palatasının 05 noyabr 2018-ci il tarixli 244 nömrəli Bank
            Lisenziyası əsasında fəaliyyət göstərir.
          </p>
          <div className="container">
            <p className="chable">
              Kapital Bank müştərilər üçün əlverişli kredit və BirKart
              kampaniyaları təklif edir. Yenilənən kampaniyalar sizə daha aşağı
              faiz dərəcəli kreditlərdən, yüksək keşbek və depozit faizlərindən
              yaralanmağa imkan verir. Bank məhsulları üçün tətbiq edilən xüsusi
              endirimlər və füsətlər ilə məhsul üstünlüklərindən rahatlıqla
              yararlana biləcəksiniz. Kapmaniyalardan xəbərdar olaraq nağd pul
              ehtiyaclarınızı qarşılamağınıza imkan tanıyan pul kreditləri üçün
              tətbiq edilən fürsətlərdən yararlana bilərsiniz. Eləcə də
              alış-verişlərinizi daha qazanclı hala çevirən bank kartları ilə
              yüksək keşbek faizlərindən, xüsusi endirimlərdən, taksit
              imkanlarından rahatlıqla faydalanacaqsınız. Alış-verişlərinizi
              sürətli və təhlükəsiz şəkildə etməyinizə imkan yaradan BirKart
              taksit kartları üçün yenilənən xüsusi təkliflərdən yararlanaraq
              üstünlüklər əldə edə bilərsiniz. Bank tərəfindən tətbiq edilən
              kampaniya müddəti, şərtləri və sənədlər ilə tanış ola bilərsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
