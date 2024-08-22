import React from "react";
import { Typography, Space, Tag, Divider } from "antd";
import {
  MailOutlined,
  HomeOutlined,
  WechatOutlined,
  PhoneOutlined,
  BookOutlined,
} from "@ant-design/icons";
import "./index.less";
import { resumeData } from "../../data/resumeData";

const { Title, Paragraph, Link } = Typography;

const About: React.FC = () => {
  const basicInfo = [
    {
      icon: <BookOutlined />,
      label: "学校",
      value: `${resumeData.education[0].institution} / ${resumeData.education[0].major}`,
    },
    { icon: <WechatOutlined />, label: "微信", value: resumeData.wechat },
    { icon: <PhoneOutlined />, label: "电话", value: resumeData.phone },
    { icon: <MailOutlined />, label: "邮箱", value: resumeData.email },
    {
      icon: <HomeOutlined />,
      label: "主页",
      value: resumeData.website,
      link: true,
    },
  ];

  return (
    <div className="about">
      <Title level={1} className="about__title">
        简介
      </Title>

      <section className="about__section">
        <Title level={2} className="about__section-title">
          背景
        </Title>
        {basicInfo.map((info) => (
          <Paragraph className="about__paragraph" key={info.label}>
            <Space>
              {info.icon}
              {info.link ? (
                <Link href={info.value} target="_blank">
                  {info.value}
                </Link>
              ) : (
                info.value
              )}
            </Space>
          </Paragraph>
        ))}
      </section>

      <section className="about__section">
        <Title level={2} className="about__section-title">
          工作经验
        </Title>
        {resumeData.jobs.map((job) => (
          <div key={job.companyName}>
            <Title level={3} className="about__company-title">
              {job.companyName}{" "}
              <span className="about__job-title">({job.position})</span>{" "}
              <span className="about__time">{job.time}</span>
            </Title>
            {job.projects.map((project) => (
              <div key={project.name} className="about__project">
                <h4>{project.name}</h4>
                <ul className="about__list">
                  {project.details.map((detail, index) => (
                    <li className="about__list-item" key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
