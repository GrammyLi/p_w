// src/components/Projects/Projects.tsx
import React, { useState } from "react";
import { Card, Col, Row, Typography, Button } from "antd";
import { EyeOutlined, LinkOutlined } from "@ant-design/icons";
import "./index.less";
import { projects } from "../../data/projects";

const { Title } = Typography;

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="projects">
      <Title level={2} className="projects__title">
        个人项目
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {displayedProjects.map((project, index) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={6} key={index}>
            <Card
              title={project.name}
              cover={<img alt={project.name} src={project.cover} />}
              className="projects__card"
              actions={[
                <Button
                  type="link"
                  icon={<EyeOutlined />}
                  disabled={!project.preveiwLink}
                  onClick={() => window.open(project.preveiwLink, "_blank")}
                >
                  预览
                </Button>,
                <Button
                  type="link"
                  icon={<LinkOutlined />}
                  disabled={!project.codeLink}
                  onClick={() => window.open(project.codeLink, "_blank")}
                >
                  源码
                </Button>,
              ]}
            >
              {project.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="projects__detail">
                  <p>{detail}</p>
                </div>
              ))}
            </Card>
          </Col>
        ))}
        <Col span={24} className="projects__show-more">
          <Button onClick={handleShowMore}>
            {showAll ? "显示更少" : "显示更多"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
