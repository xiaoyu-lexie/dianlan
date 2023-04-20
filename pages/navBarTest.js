import React, { useState } from "react";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

import MyHeader from "../components/MyHeader";

export default function NavBarTest() {
  const [current, setCurrent] = useState("home");

  return (
    <div>
      <MyHeader current={current} setCurrent={setCurrent} />
      <Content style={{ height: "100rem" }} />
    </div>
  );
}
