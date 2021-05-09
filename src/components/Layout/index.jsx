import React from "react";
import PropTypes from "prop-types";
import { Layout as AntLayout, BackTop } from "antd";
import Header from "../Header";
import "./style.scss";

const { Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout className="layout">
      <Header />
      <Content>{children}</Content>
      <BackTop />
    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
