import React from "react";
import styles from "./Profile.module.css";
import { Col, Row, Image, Flex } from "antd";
import avatar from "./assets/avatar.webp";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Title } from "../Title";
import profileIcon from "./assets/profile.svg";

export const Profile = () => (
  <div className={styles.profile}>
    <div className={`mb-10 ${styles.flex}`}>
      <div>
        <Image
          preview={false}
          alt="avatar"
          src={avatar.src}
          width={265}
          height={379}
          className={styles.avatar}
        />
      </div>
      <div className={`box ${styles.wrapper}`}>
        <Title
          iconUrl={profileIcon.src}
          title="Professional Profile"
          description="Accomplished Senior Data Scientist & Business Consultant with a proven
        track record of leveraging advanced analytics to drive strategic
        decision-making and optimize business processes."
        />
        <Flex className={styles.location} align="center" gap={5}>
          <EnvironmentOutlined />
          <p>Based in Phoenix, Arizona, USA.</p>
        </Flex>
      </div>
    </div>
    <div className={styles.worker}>
      <div className="box">
        <div className={styles.header}>Worked With</div>
        <Flex className={styles.workers} align="center" justify="space-between">
          <Image
            className={styles.workerImage}
            preview={false}
            src="https://assets-global.website-files.com/65c4b78e2f4b9d4b1696ade5/65c4e2353c29fa84e6914a94_Logo.svg"
          />
          <Image
            className={styles.workerImage}
            preview={false}
            src="https://assets-global.website-files.com/65c4b78e2f4b9d4b1696ade5/65c4e2355bc16e860fc7c04b_Logo-1.svg"
          />
          <Image
            className={styles.workerImage}
            preview={false}
            src="https://assets-global.website-files.com/65c4b78e2f4b9d4b1696ade5/65c4e235057c4d3cc98103bd_Logo-2.svg"
          />
        </Flex>
      </div>
    </div>
  </div>
);
