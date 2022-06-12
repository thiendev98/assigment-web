import React, { useState } from "react";
import $ from "jquery";
export default function Information({ user, listInfomation }) {
  return (
    <div id="InfomationAccount">
      <div className="row container-fluid ">
        {listInfomation.map((info, index) => (
          <p key={index} className="row container-fluid info__edit col-xl-12 ">
            <span className="col-xl-3 info__edit--title">{info.title}</span>
            <span className="col-xl-9 info__edit--name">{info.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
