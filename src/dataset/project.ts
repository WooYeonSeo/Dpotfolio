export interface IPROJECT {
  id: string;
  project_name: string;
  company: String;
  project_term: {
    start: string;
    end: string;
  };
  slogan: string;
  GITHUB: string;
  tech_stack: {
    frontend: string[];
    backend: string[];
    etc: string[];
  };
  dev_detail: string[];
  dev_learn: string[];
}

export const projects: (IPROJECT | undefined)[] = [
  {
    id: "1",
    project_name: "실시간 통계 대시보드",
    company: "NAVER",
    project_term: {
      start: "2020.01.04",
      end: "2020.03.04"
    },
    slogan: "통계 정보를 필터 및 조회 가능한 실시간 대시보드 구현",
    GITHUB: "",
    tech_stack: {
      frontend: [
        "TypeScript",
        "Styled-Component",
        "Apollo-Client",
        "Webpack",
        "Antd",
        "billboard.js"
      ],
      backend: ["TypeScript", "node.js", "GraphQL", "ElasticSearch"],
      etc: []
    },
    dev_detail: [
      "통계 정보를 필터 및 조회 가능한 실시간 대시보드 구현",
      "실시간 통계",
      "대시보드 화면기획 대형 스크린 대응 현황판 개발",
      "Webpack과 React SSR을 적용하여 렌더링 최적화 및 lighouse로 최적화 지표 측정",
      "Scheduler와 polling을 활용하여 실시간 데이터 로드"
    ],
    dev_learn: [
      "WEBPACK 설정을 처음부터 잡아가면서 실행하면서 번들러에 대해 공부할 수 있었음",
      "lighthouse로 지표를 바탕으로 한 최적화를 진행 하면서 최적화에 대해 고민하고 적용해 볼 수 있었음"
    ]
  },
  {
    id: "2",
    project_name: "BoostBook",
    company: "Boostcamp 2019",
    project_term: {
      start: "2019.11.04",
      end: "2019.12.23"
    },
    slogan:
      "super lite Facebook! 피드 등록, 친구의 피드보기, 알림을 구현한 facebook Clone SNS 프로젝트",
    GITHUB: "https://github.com/connect-foundation/2019-17",
    tech_stack: {
      frontend: ["TypeScript", "Styled-Component", "Apollo-Client"],
      backend: ["TypeScript", "node.js", "GraphQL", "Neo4j", "Nginx"],
      etc: ["GitHub"]
    },
    dev_detail: [
      "Redis pubsub을 이용한 실시간 피드, 친구의 활동 알림 구현",
      "피드 무한스크롤 구현",
      "Context API 와 Apollo caching을 사용한 React에서 SNS에서 실시간 알림을 위한 전역 상태관리 구현",
      "neo4j를 사용한 SNS DB 설계, neo4j parser 구현",
      "핵심 기능에 대한 테스트 코드 작성",
      "무한스크롤을 구현할 때 고려해본 것들 기술공유 작성",
      "PR에 대해 Approve 규칙을 정하고 적극적으로 코드 리뷰 참여"
    ],
    dev_learn: [
      "GraphQL 을 사용해서 커뮤니케이의 자유도가 높아진 것을 경험",
      "스프린트와 스크럼 단위의 애자일한 협업을 통한 일정관리의 효율성을 경험",
      "기술공유 세미나 발표"
    ]
  },
  {
    id: "3",
    project_name: "Airbnb 숙소검색 클론 코딩",
    company: "Boostcamp 2019",
    project_term: {
      start: "2019.10.21",
      end: "2019.10.25"
    },
    slogan: "Reusable Component 재사용성을 고민하고 적용해보자",
    GITHUB: "https://github.com/WooYeonSeo/airbnb_clone",
    tech_stack: {
      frontend: ["JavaScript", "Sass", "react"],
      backend: [
        "JavaScript",
        "node.js",
        "express",
        "sequelize",
        "docker",
        "Nginx"
      ],
      etc: ["GitHub"]
    },
    dev_detail: [
      "Redis pubsub을 이용한 실시간 피드, 친구의 활동 알림 구현",
      "피드 무한스크롤 구현",
      "Context API 와 Apollo caching을 사용한 React에서 SNS에서 실시간 알림을 위한 전역 상태관리 구현",
      "neo4j를 사용한 SNS DB 설계, neo4j parser 구현",
      "핵심 기능에 대한 테스트 코드 작성",
      "무한스크롤을 구현할 때 고려해본 것들 기술공유 작성",
      "PR에 대해 Approve 규칙을 정하고 적극적으로 코드 리뷰 참여"
    ],
    dev_learn: [
      "GraphQL 을 사용해서 커뮤니케이의 자유도가 높아진 것을 경험",
      "스프린트와 스크럼 단위의 애자일한 협업을 통한 일정관리의 효율성을 경험",
      "기술공유 세미나 발표"
    ]
  }
];
