import React from "react";
import { Button, Flex } from "antd";
import styles from "./Summary.module.css";
import AvailableIcon from "./assets/available.svg";
import { DownloadOutlined, MailOutlined } from "@ant-design/icons";

export const Summary = () => (
  <div className={styles.summary}>
    <p className={styles.available}>
      <Flex align="center" gap={5}>
        <img src={AvailableIcon.src} alt="Available icon" />
        <div>Available for Work</div>
      </Flex>
    </p>
    <div className={styles.name}>Bui Huong Quynh</div>
    <p className={styles.job}>Middle full stack web & mobile developer</p>
    <div className={styles.content}>
      <p className={styles.job}>The birth date: 05/03/2001</p>
      <p className={styles.job}>Gender: Female</p>
      <p className={styles.job}>Email: buigiangquynh@gmail.com</p>
      <p className={styles.job}>Phone: 0862098874</p>
      <p className={styles.job}>City: Da Nang, Viet Nam</p>
      <p className={styles.job}>Git: https://github.com/buihuongquynh</p>
    </div>
    <Flex align="center" justify="center" gap={5} className="mt-16">
      <Button
        icon={<MailOutlined />}
        href="mailto:buigiangquynh@gmail.com"
        type="primary"
      >
        Send Email
      </Button>
      <Button
        href="https://docs.google.com/document/d/1EaM8PfgxDpexpZudhj0sMhmDsbG9Be83/edit"
        target="blank"
        icon={<DownloadOutlined />}
      >
        Download CV
      </Button>
    </Flex>
  </div>
);
