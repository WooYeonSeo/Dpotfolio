import React from "react";
import "style/listBox.css";
const list = [
  {
    title: "팀에 기여할 수 있는 퍼포먼스를 가진 팀원이 되기."
  },
  {
    title: "공유하는 문화를 위해서 지속적으로 정리하기."
  },
  {
    title: "개발하는 분야의 비즈니스에 대해서도 함께 생각해보는 개발자가 되기."
  },
  {
    title: "프레임워크 라이브러리에 종속된 개발에서 더 나아가기."
  }
];
function WorkPhilosophy() {
  return (
    <div className="philosohy-container">
      <ul>
        {list.map(item => {
          return (
            <>
              <li>
                <span className="square_dot"></span>
                {item.title}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkPhilosophy;
