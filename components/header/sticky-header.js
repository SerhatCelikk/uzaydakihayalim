import React, { useState, useEffect } from "react";

import Link from "next/link";

import logoLight from "../../assets/images/logo-light.png";
import { Col, Row } from "react-bootstrap";
import NavLinks from "./nav-links";

const StickyHeader = ({ extraClassName }) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setSticky(true);
    } else if (window.scrollY < 130) {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`stricky-header stricked-menu ${extraClassName} ${
        sticky === true ? "stricky-fixed" : " "
      }`}
    >
      <Row>
      <Col lg={7}  >
        <Link href="/">
          <a  aria-label="logo image">
            <img className="mt-4 ml-5 " src={logoLight} width="101" />
          </a>
        </Link>
      </Col>

      <Col lg={5}  >
       <NavLinks />
      </Col>
      </Row>
    </div>
  );
};

export default StickyHeader;
