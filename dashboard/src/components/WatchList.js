import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { watchlist } from "../data/data"; // Assuming watchListData.js exports the watchList array


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />);
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
  };
  const handleMouseLeave = (e) => {
    setIsHovered(false);
  };

  return (
    <li
      className="list-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item">
        <span className={stock.isDown1 ? "down" : "up"}>{stock.name}</span>
        <span className="item-info">{stock.symbol}</span>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown1 ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {isHovered && (
        <WatchListAction uid={stock.uid} />
      )}
    </li>
  );
};

const WatchListAction = ({ uid }) => {

  return (
    <span className="actions">
      <span className="action-item">
        <Tooltip
          title="Buy"
          TransitionComponent={Grow}
          placement="top"
          arrow
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell"
          TransitionComponent={Grow}
          placement="top"
          arrow
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          TransitionComponent={Grow}
          placement="top"
          arrow
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>

        </Tooltip>
        <Tooltip
          title="More"
          TransitionComponent={Grow}
          placement="top"
          arrow
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  )

}
