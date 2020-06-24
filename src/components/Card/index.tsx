import React from "react";
import "style/Card.css";
interface CardSetting {
  isBorder: boolean;
  isUnderline?: boolean;
}
function Card({
  children,
  title,
  subTitle,
  cardSetting
}: {
  children: React.ReactFragment;
  title: React.ReactFragment;
  subTitle?: React.ReactFragment;
  cardSetting?: CardSetting;
}) {
  return (
    <div
      className={`card-container card-${
        cardSetting && !cardSetting.isBorder ? "" : "box"
      }`}
    >
      <p
        className={`card-title ${
          cardSetting && !cardSetting.isUnderline ? "" : "card-underline"
        }`}
      >
        {title}
        <span className="card-subtitle">{subTitle}</span>
      </p>

      <p className="card-body">{children}</p>
    </div>
  );
}

export default Card;
