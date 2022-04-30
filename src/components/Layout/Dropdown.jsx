import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const DUMMY_LIST = [
  {
    id: 1,
    title: "Add Products",
    path: "./add-products",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "My Products",
    path: "./my-products",
    cName: "submenu-item",
  },
];

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {DUMMY_LIST.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
