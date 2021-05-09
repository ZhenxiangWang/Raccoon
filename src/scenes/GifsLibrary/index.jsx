import React from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import Layout from "../../components/Layout";
import GifsGrid from "../../components/GifsGrid";
import { loadingSelector } from "./selectors";
import { useRaccoonGifs } from "./hooks";
import "./style.scss";

const GifsLibrary = () => {
  const raccoonGifs = useRaccoonGifs();
  const loading = useSelector(loadingSelector);

  return (
    <Layout>
      <div className="gifs-library-container">
        <h1 className="title">Gifs Library</h1>
        {loading ? <Spin /> : <GifsGrid gifsData={raccoonGifs} />}
      </div>
    </Layout>
  );
};

export default GifsLibrary;
