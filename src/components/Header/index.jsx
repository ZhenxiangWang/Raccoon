import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Menu } from "antd";
import "./style.scss";

const Header = () => {
  const { path } = useRouteMatch();
  const [selectedKey, setSelectedKey] = useState(path);

  const handleClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <header className="header-container">
      <img
        className="header-logo"
        src={process.env.PUBLIC_URL + "/raccoon-logo.png"}
        alt="logo"
      />
      <h1>Raccoon</h1>
      <Menu
        onClick={handleClick}
        selectedKeys={[selectedKey]}
        mode="horizontal"
      >
        <Menu.Item key="/gifs-library">
          <Link to="/gifs-library">Gifs Library</Link>
        </Menu.Item>
        <Menu.Item key="/my-library">
          <Link to="/my-library">My Gifs Library</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Header;
