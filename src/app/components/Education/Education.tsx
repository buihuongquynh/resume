import React from "react";
import styles from "./Education.module.css";
import { Button, Flex } from "antd";
import { Title } from "../Title";
import { CalendarOutlined } from "@ant-design/icons";
import educationIcon from "./assets/education.svg";

export const Education = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title iconUrl={educationIcon.src} title="Education" />
      <div className={styles.education}>
        <Flex align="center" justify="space-between">
          <div>
            <div className={styles.schoolNAme}>
              The University of Danang - University of Science and Technology
            </div>
            <div className={styles.specialized}>
              Major: Information Technology (Vietnam-Japan) undergraduate
            </div>
          </div>
          <Button
            className={styles.time}
            size="small"
            icon={<CalendarOutlined />}
          >
            2018 - 9/2023
          </Button>
        </Flex>
      </div>
    </div>
  </div>
);
