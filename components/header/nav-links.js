import React, { useContext } from "react";
import Link from "next/link";
import { SearchContext } from "../../context/search-context";
import StoreContext from "../../context/store";
import styles from "./style.module.css";
import { Disconnect } from "../icons/";
import useTranslation from 'next-translate/useTranslation';

const NavLinks = ({ extraClassName }) => {
  const { t, lang } = useTranslation()

  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const { handleConnect, walletAddress, handleDisconnect, connected } =
    useContext(StoreContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  const connect = () => {
    handleConnect();
  };

  // const handleDropdownStatus = (e) => {
  //   let clickedItem = e.currentTarget.parentNode;
  //   clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  // };
  return (
    <div>
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <div>
          <Link href="/">
            <a className="scroll-to-target text-white">{t('common:Anasayfa')}</a>
          </Link>
        </div>

        {/* <ul className="dropdown-list">
          <li>
            <Link href="/index">
              <a>Home One</a>
            </Link>
          </li>
          <li>
            <Link href="/index-2">
              <a>Home Two</a>
            </Link>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
                <a>Header Styles</a>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/index">
                  <a>Header One</a>
                </Link>
              </li>
              <li>
                <Link href="/index-2">
                  <a>Header Two</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul> */}
      </li>
      {/* <li className="dropdown">
        <Link href="/causes">
          <>
            <a>Causes</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/causes">
              <a>Causes</a>
            </Link>
          </li>
          <li>
            <Link href="/cause-details">
              <a>Cause Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/events">
          <>
            <a>Events</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href="/event-details">
              <a>Event Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/news">
          <>
            <a>News</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/news-details">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Pages</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/volunteers">
              <a>Volunteers</a>
            </Link>
          </li>
          <li>
            <Link href="/become-volunteer">
              <a>Become a Volunteer</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>
      </li> */}

      <li>
        <div>
          <Link href="/how-its-works">
            <a className="scroll-to-target text-white">{t('common:Hayalin mi var?')}</a>
          </Link>
        </div>
      </li>
      <li>
        <div>
          <Link href="mailto:support@hayalimuzayda.com">
            <a className="scroll-to-target text-white" target="_blank">
            {t('common:Destek')}
            </a>
          </Link>
        </div>
      </li>
      <div className={styles.connectbutton}>
        {connected ? (
          
            <button className={styles.buttonHeading} onClick={handleDisconnect}>
              {"   "} {t('common:Disconnect')} {"     "}
              <Disconnect width="15" height="15" color="inherit" />
            </button>
          
        ) : (
          <button className={styles.buttonHeading} onClick={handleConnect}>
            {t('common:Connect Wallet')}
          </button>
        )}
      </div>
     
     </ul>
    
   </div>
  );
};

export default NavLinks;
