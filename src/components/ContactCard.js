import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, firstName, lastName, phone } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{firstName}</div>
        <div>{lastName}</div>
        <div>{phone}</div>
      </div>
      <i
        className="bi bi-pencil-fill"
        style={{ color: "green", marginTop: "7px", marginLeft: "20px", fontSize: "1.5em" }}
      ></i>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
