import React, { useState } from "react";
import { Layout } from "antd";
import Image from "next/image";

import NavBar from "./NavBar";
import logo from "../public/images/logo.png";

const { Header, Content, Footer } = Layout;

const MyHeader = (props) => {
  const { current, setCurrent } = props;

  return (
    <Header className="header">
      <div className="logo">
        <Image width={80} src={logo} alt="logo" />
      </div>
      <NavBar current={current} setCurrent={setCurrent} />
    </Header>
  );
};

export default MyHeader;
