import React, { Component } from "react";

// Complete this Component
const ListItem = ({ data }) => {
  // let bg = this.props.data.bgColor;
  return (
    <div
      key={data.id}
      className="ListItem"
      style={{
        height: 30,
        background: data.bgColor,
      }}
    >
      <img src={data.icon} alt="" />
      <a href={data.link}>{data.name}</a>
    </div>
  );
};

export default ListItem;
