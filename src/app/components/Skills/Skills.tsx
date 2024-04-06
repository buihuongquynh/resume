import React from "react";
import styles from "./Skills.module.css";
import { Title } from "../Title";
import skillIcon from "./assets/skill.svg";
import { Button, Flex } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const skillList = [
  {
    title: "Front end",
    skills: ["Html", "Css", "JavaScript", "ReactJS", "NextJs", "VueJS"],
  },
  {
    title: "Back end",
    skills: ["NodeJs", "NestJS", "PHP", "Laravel"],
  },
  {
    title: "Database",
    skills: ["SQL", "Firebase", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Other",
    skills: ["TypeScript", "Wordpress", "Shopify"],
  },
];

export const Skills = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title
        iconUrl={skillIcon.src}
        title="Professional Skills"
        description="Key competencies essential for navigating and excelling in various professional contexts."
      />
    </div>
    {skillList.map((skill, index) => (
      <div key={index} className={styles.skillList}>
        <div className={styles.title}>{skill.title}</div>
        <Flex align="center" gap={5} wrap="wrap">
          {skill.skills.map((item) => (
            <Button
              key={index}
              className={styles.item}
              icon={<CheckOutlined className={styles.icon} />}
            >
              {item}
            </Button>
          ))}
        </Flex>
      </div>
    ))}
  </div>
);
