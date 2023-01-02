import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="GMAIL"/>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text"/>
        <ArrowDropDownIcon className="header__inputCaret"/>
      </div>
      <div className="header__right">
      </div>
    </div>
  );
}

export default Header;
