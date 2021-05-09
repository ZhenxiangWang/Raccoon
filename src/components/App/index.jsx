import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import PropTypes from "prop-types";
import { initialize } from "./actions";
import "./App.scss";

const App = ({ children, initialize, initialized }) => {
  useEffect(() => {
    initialize();
  }, [initialize]);
  return initialized ? children : <Spin size="large" />;
};

App.propTypes = {
  children: PropTypes.node,
  initialize: PropTypes.func,
  initialized: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const mapDispatchToProps = { initialize };

export default connect(mapStateToProps, mapDispatchToProps)(App);
