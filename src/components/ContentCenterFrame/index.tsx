import React from "react";
import "style/layout.css";

function ContentCenterFrame({ children }: { children: React.ReactFragment }) {
  return <div className="frame-for-center">{children}</div>;
}

export default ContentCenterFrame;
