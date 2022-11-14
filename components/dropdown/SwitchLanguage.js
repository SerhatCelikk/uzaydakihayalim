import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Link from "next/link";

const SwitchLanguage = () => {
  return (
    <>
      <p>uranus</p>
    </>
    // <Dropdown
    //             label={lang === "tr" ? t("common:language-name-tr") : t("common:language-name-en")}
    //             style={{ marginLeft: 12, backgroundColor: "#313274" }}
    //           >
    //             <Dropdown.Item>
    //               <Link href="/" locale="tr">
    //                 <div className="flex items-center gap-2">

    //                   {t("common:language-name-tr")}
    //                 </div>
    //               </Link>
    //             </Dropdown.Item>
    //             <Dropdown.Divider />
    //             <Dropdown.Item>
    //               <Link href="/" locale="en">
    //                 <div className="flex items-center gap-2">

    //                   {t("common:language-name-en")}
    //                 </div>
    //               </Link>
    //             </Dropdown.Item>
    //           </Dropdown>
  );
};

export default SwitchLanguage;
