import React from "react";
import Header from "compositions/Header";
import Profile from "compositions/Profile";
import Card from "components/Card";
import ContentCenterFrame from "components/ContentCenterFrame";

function Main() {
  return (
    <>
      <Header />
      <ContentCenterFrame>
        <Card title="한가지 기능을 여러 방법으로 개발해보려고 하는 개발자입니다. 최근에는 공유하는 개발자가 되려고 노력하고 있습니다.">
          <Profile />
        </Card>
        <Card title="test">
          <p>test2</p>
        </Card>
      </ContentCenterFrame>
    </>
  );
}

export default Main;
