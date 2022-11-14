import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import heartImage from "../assets/images/shapes/heart-2-1.png";
import StoreContext from "../context/store";
import styles from "./style.module.css";
import { chainHex } from "../config";
import { ToastContainer } from "react-toastify";
import useTranslation from "next-translate/useTranslation";

const DonationOptions = () => {
  const { t, lang } = useTranslation();
  const { donate, isBsc, handleConnect, connected, switchNetwork } =
    useContext(StoreContext);
  const [donateAmount, setDonateAmount] = useState(0);

  return (
    <section id="donate-options-section" className="donate-options pt-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="donate-options__content">
              <div className="block-title">
                <p>
                  <img src={heartImage} style={{color:"pink"}} width="15" alt="" />
                  {t("common:Bağış Yap")}
                </p>
                <ToastContainer />
                <h2 style={{paddingTop:"20px"}}>{t("common:İnsanların Hayallerini")} <br/> {t("common:Gerçekleştir")}</h2>
              </div>
              <p className={styles.helpPeopleText}>
              {t("common:Bu projeye kişi")}
              <br />
              {t("common:insanların hayallerini")}
    <br />
    {t("common:İsterseniz,")}

<a href="https://www.nftdoit.net" target="_blank" style={{color:"blue",fontWeight:"bold"}}>nftdoit.net</a>
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="donate-options__form wow fadeInUp">
              <h3 className="text-center"> {t("common:Şimdi BNB Bağışla")}</h3>

              <div>
                <p className="text-center"></p>
                <p
                  className="text-center pt-0"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                ></p>
              </div>

              {/* <label htmlFor="donate-name" className="sr-only"></label>
              <input type="text" id="donate-name" placeholder="Your Name" /> */}
              <label className="sr-only"></label>
              <input
                type="text"
                placeholder="Insert BNB amount"
                id="donate-amount"
                value={donateAmount}
                onChange={(e) => setDonateAmount(e.target.value)}
              />
              <ul id="donate-amount__predefined" className="list-unstyled">
                <li>
                  <a onClick={() => setDonateAmount(0.035)}>0.035</a>
                </li>
                <li>
                  <a onClick={() => setDonateAmount(0.075)}>0.035</a>
                </li>
                <li>
                  <a onClick={() => setDonateAmount(0.185)}>0.185</a>
                </li>
              </ul>
              <br />
              {connected ? (
                isBsc ? (
                  <button
                    className="thm-btn "
                    onClick={() => donate(donateAmount.toString())}
                  >
                    {t("common:Donate Now")}
                  </button>
                ) : (
                  <button
                    className="thm-btn "
                    onClick={() => switchNetwork(chainHex)}
                  >
                    {t("common:Switch Network")}
                  </button>
                )
              ) : (
                <button className="thm-btn " onClick={handleConnect}>
                  {t("common:Connect Wallet")}
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonationOptions;
