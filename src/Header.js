import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>

      <div className="header__right">
        <Avatar
          className="header__avatar"
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h5> {user?.display_name}</h5>
      </div>
    </div>
  );
}

export default Header;
