import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "antd";
import { HeartFilled } from "@ant-design/icons";
import { favorite, unfavorite } from "../../scenes/GifsLibrary/actions";
import "./style.scss";

const url = process.env.REACT_APP_URL_BASE;
const width = 480;
const margin = 16;

const GifsGrid = ({ gifsData }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid-container">
      {gifsData?.map((gif, index) => {
        const translateX =
          index % 2 === 0 ? -(480 + margin) / 2 : (480 + margin) / 2;
        let translateY = 0;
        if (index === 0 || index === 1) {
          translateY = 0;
        } else {
          for (let i = index - 2; i >= 0; i -= 2) {
            translateY += gifsData[i].height + margin;
          }
        }
        return (
          <div
            key={gif.id}
            className="grid-item"
            style={{
              transform: `translate(${translateX}px, ${translateY}px)`,
            }}
          >
            <Button
              className="grid-button"
              icon={
                <HeartFilled
                  style={{ color: gif.favorited ? "#eb2f96" : "#fff" }}
                />
              }
              type="dashed"
              shape="circle"
              style={{ backgroundColor: "transparent" }}
              onClick={() =>
                gif.favorited
                  ? dispatch(unfavorite(gif))
                  : dispatch(favorite(gif))
              }
            />
            <iframe
              src={`${url}${gif.id}`}
              title="Raccoon Gifs"
              width={width}
              height={gif.height}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

GifsGrid.propTypes = {
  gifsData: PropTypes.arrayOf(PropTypes.object),
  favoriteGif: PropTypes.func,
  unfavoriteGif: PropTypes.func,
};

export default GifsGrid;
