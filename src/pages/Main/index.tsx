import React from "react";
import Header from "compositions/Header";
import Profile from "compositions/Profile";
import Card from "components/Card";
import ContentCenterFrame from "components/ContentCenterFrame";
import "style/main.css";
import "style/commonMain.css";
import "style/common.css";
import "billboard.js/dist/theme/insight.css";

import { Tag } from "antd";

import useChart from "shared/hooks/useChart";
import { formatNumberComma } from "shared/util/format/formatNumberComma";

const creatTypes = (stackedDatafeilds: (string | number)[]) => {
  return (
    stackedDatafeilds &&
    stackedDatafeilds.reduce((result, current) => {
      return { ...result, [current]: "bar" };
    }, {})
  );
};
function Main() {
  const format = {
    value: (value: number) => formatNumberComma(value)
  };
  const data = [
    ["x", "React", "Typescript", "Webpack", "Docker", "Javscript", "NCP "],
    ["skill point", 300, 200, 170, 130, 120, 20]
  ];

  const { setRef, RenderChart } = useChart({
    format,
    data,
    type: "bar",
    size: {
      height: 500,
      width: 900
    },
    xAxis: "x",
    axis: {
      rotated: true,
      x: {
        type: "category",
        height: 130,

        tick: {
          multiline: false,
          tooltip: true
        }
      }
    },
    colors: {
      "skill point": "#4c4b71"
    }
  });

  return (
    <>
      <Header />
      <div className="main-background">
        <div className="main-left-background"></div>
        <div className="profile-card">
          <div className="profile-left">
            <img className="profile-circle" src="./profile.jpeg" height="176" />
            <div className="profile-name">WOO YEONSEO</div>
            <div className="profile-position">Front-End DEVELOPER</div>
          </div>
          <div className="profile-text">
            <p>
              " 다양한 방법으로 개발하려고 하는 개발자입니다. <br />
              공유하는 개발자가 되려고 노력하고 있습니다."
            </p>
            <p>
              저는 꾸준히 공유하는 개발자가 되고싶은 주니어 개발자입니다.
              프로젝트를 진행하면서 공유 문화가 갖는 긍정적인 효과를 경험했기
              때문입니다. 문제상황과 고민 그리고 해결한 것들을 글로 작성하고
              공유하기 위해서 블로그에 글을 작성하고 있습니다. 함께
              커뮤니케이션하고 좋은 코드에 대해 고민하고 싶습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="second-background">
        <p className="main-title">
          <span>01.</span> TECH STACK
        </p>

        <div>
          <p className="tech-box">
            <span className="square_dot"></span>
            <span>COMMON </span>

            <Tag color="purple">JavaScript</Tag>
            <Tag color="purple">Java</Tag>
            <Tag color="purple">TypeScript</Tag>
            <Tag color="purple">NCP</Tag>
            <Tag color="purple">Git</Tag>
            <Tag color="purple">Sequelize</Tag>
            <Tag color="purple">Webpack</Tag>
          </p>
          <p className="tech-box">
            <span className="square_dot"></span>
            <span>FRONT_END </span>
            <Tag color="purple">HTML</Tag>
            <Tag color="purple">CSS</Tag>
            <Tag color="purple">Sass</Tag>
            <Tag color="purple">React</Tag>
            <Tag color="purple">Apollo-Client</Tag>
          </p>
          <p className="tech-box">
            <span className="square_dot"></span>
            <span>BACK_END </span>
            <Tag color="purple">Node.js</Tag>
            <Tag color="purple">Mysql</Tag>
            <Tag color="purple">Docker</Tag>
            <Tag color="purple">GraphQL</Tag>
            <Tag color="purple">Sequelize</Tag>
          </p>
        </div>
        <div className="tech-chart">
          <div ref={setRef as any}></div>
        </div>
      </div>
      <ContentCenterFrame>
        <Card
          title={
            "한가지 기능을 여러 방법으로 개발해보려고 하는 개발자입니다. 최근에는 공유하는 개발자가 되려고 노력하고 있습니다."
          }
          cardSetting={{ isBorder: false }}
        >
          <Profile />
        </Card>
        <Card title="PROFILE">
          <p>test2</p>
        </Card>
      </ContentCenterFrame>
    </>
  );
}

export default Main;
