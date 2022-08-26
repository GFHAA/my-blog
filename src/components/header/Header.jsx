import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import { Context } from "../Context";
const Header = () => {
  const { isMobile } = useContext(Context);
  const [openSearch, setOpenSearch] = useState(false); //только для мобилок
  return (
    <div className="header-holder">
      <header className="container">
        <nav>
          <div className={`logo ${openSearch && isMobile ? "close" : ""}`}>
            <a href="/">
              <img src={logo} alt="Логотип" />
            </a>
            <h1>
              <a href="/">Poshtet</a>
            </h1>
          </div>
          <div className={`search ${openSearch && "w100"}`}>
            <input
              type="text"
              placeholder="Что ищем?"
              className={`${!openSearch && "close"}`}
            />
            <img
              src={search}
              className="search-img"
              alt="Поиск"
              onClick={() => {
                if (isMobile) {
                  setOpenSearch(!openSearch);
                }
              }}
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
