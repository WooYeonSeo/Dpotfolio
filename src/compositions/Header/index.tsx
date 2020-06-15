import React from "react";
import "style/Header.css";
import "antd/dist/antd.css";
import { PageHeader, Button, Tag } from "antd";
function Header() {
  return (
    <div className="header-container">
      <PageHeader
        title="Title"
        className="site-page-header"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>
        ]}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
        }}
      >
        content
      </PageHeader>
    </div>
  );
}

export default Header;
