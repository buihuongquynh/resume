import React from "react";
import styles from "./Education.module.css";
import { Button, Flex } from "antd";
import { Title } from "../Title";
import { CalendarOutlined } from "@ant-design/icons";
import educationIcon from "./assets/education.svg";

export const Education = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title
        iconUrl={educationIcon.src}
        title="Education"
        description=" Degrees and certifications in the specialized fields of data science
          and business analytics."
      />
      <div className={styles.education}>
        <Flex align="center" justify="space-between">
          <div>
            <div className={styles.schoolNAme}>Princeton University</div>
            <div className={styles.specialized}>
              Master’s degree Data Science
            </div>
          </div>
          <Button
            className={styles.time}
            size="small"
            icon={<CalendarOutlined />}
          >
            Sep 2015 - Dec 2016
          </Button>
        </Flex>
      </div>
    </div>
  </div>
);
