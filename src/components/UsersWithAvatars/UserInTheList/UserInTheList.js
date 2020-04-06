import React from "react";
import "./UserInTheList.scss";

export function UserInTheList({ user }) {
  const {
    name,
    address: { street, suite }
  } = user;
  return (
    <li className="list-item">
      <div className="list-item_container">
        <div className="list-item__image">
          <img
            className="avatars"
            src="https://pickaface.net/gallery/avatar/unr_woman1_191120_0248_90b0ts.png"
            alt="avatar"
          />
        </div>
        <div className="list-item__content">
          <h4 className="content-header">{`${name}`}</h4>
          <p className="content-paragraph">{`${street} ${suite}`}</p>
        </div>
      </div>
    </li>
  );
}
