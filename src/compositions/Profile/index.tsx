import React from "react";
import "style/Profile.css";

function Profile() {
  return (
    <div className="profile-contianer ">
      <p className="profile-description-container">
        저는 공유하는 개발자입니다. 프로젝트를 진행하면서 공유 문화가 갖는
        긍정적인 효과를 경험했기 때문입니다. SNS 클론 프로젝트를 진행 할 때
        프론트엔드 개발 팀원으로서 GraphQL과 Apollo-Client를 먼저 학습하고
        팀원들에게 내용을 공유한 경험이 있습니다. 공유하는 통해서 팀 내의
        프로젝트 진행 속도를 단축 시킬 수 있었다는 팀원 피드백을 받을 수
        있었습니다. 또한, 팀 내의 기술 공유를 목적으로 하다 보니 명확하게 문제와
        해결과정을 표현할 수 있었습니다. 이후에도 문제상황과 고민 그리고 해결한
        것들을 글로 작성하고 공유하기 위해서 블로그에 글을 작성하고 있습니다.
        개발팀에서 같이 커뮤니케이션하고 좋은 코드에 대해 고민할 수 있는 팀에서
        근무하고 싶습니다.
      </p>
      <div>
        <p>position : Front-End</p>
        <p>GitHub | https://github.com/WooYeonSeo</p>
        <p>
          보유기술 웹일반 | Javascript, Java, TypeScript 프론트엔드 | HTML, CSS,
          React, Sass, Apollo-Client 백엔드 | Node.js, Mysql, Docker, Cassandra,
          GraphQL 기타 | Git, NCP, Sequelize
        </p>
      </div>
    </div>
  );
}

export default Profile;
