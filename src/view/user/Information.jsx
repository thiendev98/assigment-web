import React, { useState } from "react";
import $ from "jquery";
import { FaPencilAlt, FaCheck, FaTimes } from "react-icons/fa";
export default function Information({ user }) {
  const [isEditName, setIsEditName] = useState(false);
  const [indexEdit, setIndexEdit] = useState(99);
  const listInfomation = [
    {
      title: "Họ và tên:",
      name: user.name,
    },
    {
      title: "Địa chỉ email:",
      name: user.email,
    },
    {
      title: "Số điện thoại:",
      name: `0${user.phone}`,
    },
  ];
  const handleEditClick = (info, index) => {
    setIndexEdit(index);
    setIsEditName(true);
  };
  const handleCancelClick = (info, index) => {
    setIsEditName(false);
  };
  const handleSaveClick = (info, index) => {};
  return (
    <div id="InfomationAccount">
      <div className="row container-fluid ">
        {listInfomation.map((info, index) => (
          <p key={index} className="row container-fluid info__edit col-xl-6 ">
            <span className="col-xl-4 info__edit--title">{info.title}</span>
            <span className="col-xl-7 info__edit--name">
              {isEditName && indexEdit === index ? (
                <input type="text" placeholder={info.name} />
              ) : (
                info.name
              )}
            </span>
            <span className="col-xl-1 info__edit--icon">
              {!isEditName ? (
                <FaPencilAlt onClick={() => handleEditClick(info, index)} />
              ) : (
                <div className="info__edit--icon__check">
                  <span>
                    <FaCheck onClick={() => handleSaveClick(info, index)} />
                  </span>{" "}
                  <span>
                    <FaTimes onClick={() => handleCancelClick(info, index)} />
                  </span>
                </div>
              )}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
