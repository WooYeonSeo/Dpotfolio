import React from "react";
import "style/Card.css";
interface CardSetting {
  isBorder?: boolean;
  isUnderline?: boolean;
}
function Card({
  children,
  title
}: {
  children: React.ReactFragment;
  title: string;
  setting?: CardSetting;
}) {
  return (
    <div className="card-container card-box">
      <p className="card-title card-underline">{title}</p>
      <p className="card-body">{children}</p>
    </div>
  );
}

export default Card;
