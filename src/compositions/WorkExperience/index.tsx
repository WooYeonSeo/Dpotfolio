import React from "react";
import { Timeline } from "antd";

function WorkExperience() {
  return (
    <div className="work-container">
      <Timeline mode="left">
        <Timeline.Item label="2019.08.26 - 2019.12.20" color="purple">
          <div className="work-card">
            <p>NAVER | 예약 플랫폼 FrontEnd 인턴 </p>
            <span>React 기반 통계 차트 개발 </span>
          </div>
        </Timeline.Item>

        <Timeline.Item label="2019.08.26 - 2019.12.20" color="purple">
          <div className="work-card">
            <p>커넥트재단 | 부스트캠프 2019 맴버십</p>
          </div>
        </Timeline.Item>
        <Timeline.Item label="2019.07.15 - 2019.08.09" color="purple">
          <div className="work-card">
            <p>커넥트재단 | 부스트캠프 2019 챌린지</p>
          </div>
        </Timeline.Item>
        <Timeline.Item label="2017.08 - 2019.07" color="purple">
          <div className="work-card">
            <p>IMAXSOFT 근무</p>
            <span>LMS 시스템 유지보수 및 신규 기능 개발, 고객사 대응</span>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default WorkExperience;
