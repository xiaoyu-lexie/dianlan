import React, { useState } from "react";
import { Menu } from "antd";

const items = [
  {
    label: "首页",
    key: "home",
  },
  {
    label: "关于我们",
    key: "about",
  },
  {
    label: "产品中心",
    key: "products",
  },
  {
    label: "服务支持",
    key: "service",
  },
];

const NavBar = (props) => {
  const { current, setCurrent } = props;

  const handleClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
      className="navBar"
    />
  );
};

export default NavBar;
