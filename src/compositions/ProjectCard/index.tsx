import React from "react";
import Card from "components/Card";
import { projects, IPROJECT } from "dataset/project";
import { Tag } from "antd";

function ProjectCard() {
  console.log("projects", projects);

  return (
    <>
      <p className="main-title">
        <span>02.</span> PROJECT
      </p>
      {projects.map((item: IPROJECT | undefined, index) => {
        console.log("company", item && item.company);
        return (
          item && (
            <Card
              title={<span>{item.project_name}</span>}
              subTitle={
                <span>
                  {item.company} | {item.project_term.start} -
                  {item.project_term.end}
                </span>
              }
            >
              <p className="project-subject">{item.slogan}</p>
              <p>
                <span className="square_dot"></span>
                <span>BACK_END </span>
                {item.tech_stack.backend.map(stack => (
                  <Tag color="purple">{stack}</Tag>
                ))}
              </p>
              <p>
                <span className="square_dot"></span>
                <span>FRONT_END </span>
                {item.tech_stack.frontend.map(stack => (
                  <Tag color="purple">{stack}</Tag>
                ))}
              </p>
              <p>
                <span className="square_dot"></span>
                {item.GITHUB.length ? (
                  <span>
                    <a href={item.GITHUB}>GITHUB LINK</a>
                  </span>
                ) : (
                  <span>GITHUB | 비공개 </span>
                )}
              </p>
              <p>
                <span className="square_dot"></span>개발 내용
              </p>
              <p className="inner-block">
                {item.dev_detail.map(detail => (
                  <>
                    <span>- {detail}</span>
                    <br />
                  </>
                ))}
              </p>

              <p>
                <span className="square_dot"></span>기억에 남는 점
              </p>
              <p className="inner-block">
                {item.dev_learn.map(learn => (
                  <>
                    <span>- {learn}</span>
                    <br />
                  </>
                ))}
              </p>
            </Card>
          )
        );
      })}
    </>
  );
}

export default ProjectCard;
