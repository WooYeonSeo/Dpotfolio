import React from "react";
import "style/Card.css";
interface CardSetting {
  isBorder: boolean;
  isUnderline?: boolean;
}
function Card({
  children,
  title,
  cardSetting
}: {
  children: React.ReactFragment;
  title: string;
  cardSetting?: CardSetting;
}) {
  return (
    <div
      className={`card-container card-${
        cardSetting && !cardSetting.isBorder ? "" : "box"
      }`}
    >
      <p className="card-title card-underline">{title}</p>
      <p className="card-body">{children}</p>
    </div>
  );
}

export default Card;
