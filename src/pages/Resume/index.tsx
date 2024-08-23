// src/components/Resume/Resume.tsx
import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  WechatOutlined,
  MailOutlined,
  GithubOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import "./index.less";
import { resumeData } from "../../data/resumeData";
import { projects } from "../../data/projects";
// @ts-ignore
import Avatar from "../../asset/avatar.jpg";

const { Title, Paragraph, Text, Link } = Typography;

const GResume = (props: { isCv: boolean }) => {
  const { isCv } = props;

  return (
    <div
      className="resume"
      style={{
        maxWidth: isCv ? "100%" : 900,
      }}
    >
      <img src={Avatar} alt="李朝" className="resume__avatar" />
      <Title level={1} className="resume__name">
        {resumeData.name}
      </Title>
      <div className="resume__contact">
        <div className="resume__contact-item">
          <PhoneOutlined />
          <Link href={`tel:${resumeData.phone}`}>{resumeData.phone}</Link>
        </div>
        <div className="resume__contact-item">
          <MailOutlined />
          <Link href={`mailto:${resumeData.email}`}>{resumeData.email}</Link>
        </div>
        <div className="resume__contact-item">
          <GlobalOutlined />
          <Link
            href={resumeData.website}
            target="_blank"
            style={{
              textDecorationLine: "underline",
            }}
          >
            {resumeData.website}
          </Link>
        </div>
        <div className="resume__contact-item">
          <WechatOutlined style={{ marginRight: 8 }} />
          {resumeData.wechat}
        </div>
      </div>
      {!isCv && (
        <Paragraph className="resume__objective">
          {resumeData.objective}
        </Paragraph>
      )}

      {/* <Title level={2}>个人技能</Title> */}
      {resumeData.skills.map((skill, index) => (
        <div key={index}>
          <Title level={2}>{skill.category}</Title>
          {skill.details.map((detail, detailIndex) => (
            <Paragraph key={detailIndex}>{detail}</Paragraph>
          ))}
        </div>
      ))}
      <Title level={2}>工作经历</Title>
      {resumeData.jobs.map((job, jobIndex) => (
        <div key={jobIndex}>
          <Title level={3}>
            {job.companyName} <Text type="secondary">{job.position}</Text>{" "}
            <Text type="secondary">{job.time}</Text>
          </Title>
          {job.projects.map((project, projectIndex) => (
            <div key={projectIndex}>
              <Title level={4}>{project.name}</Title>
              {project.details.map((detail, detailIndex) => (
                <Paragraph key={detailIndex}>{detail}</Paragraph>
              ))}
            </div>
          ))}
        </div>
      ))}

      <Title level={2}>个人项目</Title>
      {projects.map((project, projectIndex) =>
        project?.isResume ? (
          <div key={projectIndex}>
            {project?.codeLink ? (
              <Link
                href={project?.codeLink}
                target="_blank"
                style={{
                  textDecorationLine: "underline",
                }}
              >
                <Title level={3}>{project.name}</Title>
              </Link>
            ) : (
              <Title level={3}>{project.name}</Title>
            )}

            {project.details.map((detail, detailIndex) =>
              typeof detail === "string" ? (
                <Paragraph key={detailIndex}>{detail}</Paragraph>
              ) : (
                <Paragraph key={detailIndex}>
                  {detail.link ? (
                    <>
                      {" "}
                      <Link
                        href={detail.link}
                        target="_blank"
                        style={{
                          textDecorationLine: "underline",
                          marginRight: 8,
                        }}
                      >
                        {detail.name}
                      </Link>
                      {detail.text ? `:${detail.text}` : ""}
                    </>
                  ) : (
                    `${detail.name}: ${detail.text}`
                  )}
                </Paragraph>
              )
            )}
          </div>
        ) : null
      )}

      <Title level={2}>教育经历</Title>
      {resumeData.education.map((edu, eduIndex) => (
        <div key={eduIndex}>
          <Title level={3}>{edu.institution}</Title>
          <Paragraph>
            {edu.major} <Text type="secondary">{edu.period}</Text>{" "}
          </Paragraph>
        </div>
      ))}
    </div>
  );
};

export default GResume;
