import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Spin, Button, message } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import Layout from "../../components/Layout";
import GifsGrid from "../../components/GifsGrid";
import { copyToClipboard } from "../../utils";
import { loadingSelector } from "../GifsLibrary/selectors";
import { useMyRaccoonGifs } from "./hooks";
import "./style.scss";

const MyLibrary = () => {
  const { path } = useRouteMatch();
  const myRaccoonGifs = useMyRaccoonGifs();
  const loading = useSelector(loadingSelector);

  const handleClick = () => {
    const host = window.location.host;
    const queryString =
      "?" +
      myRaccoonGifs.map((gif, index) => `gif${index}=${gif.id}`).join("&");
    copyToClipboard(host + path + queryString);
    message.success("Link copied to clipboard!");
  };

  return (
    <Layout>
      <div className="my-library-container">
        <div className="title">
          <h1>My Gifs Library</h1>
          <Button
            type="primary"
            icon={<LinkOutlined />}
            size="large"
            className="link-button"
            onClick={handleClick}
          >
            Copy link to share!
          </Button>
        </div>
        {loading ? <Spin /> : <GifsGrid gifsData={myRaccoonGifs} />}
      </div>
    </Layout>
  );
};

export default MyLibrary;
