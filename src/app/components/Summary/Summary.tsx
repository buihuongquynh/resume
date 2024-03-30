import React from "react";
import { Button, Flex } from "antd";
import styles from "./Summary.module.css";
import AvailableIcon from "./assets/available.svg";

export const Summary = () => (
  <div className={styles.summary}>
    <p className={styles.available}>
      <Flex align="center" gap={5}>
        <img src={AvailableIcon.src} alt="Available icon" />
        <p>Available for Work</p>
      </Flex>
    </p>
    <div className={styles.name}>Huong Quynh</div>
    <p className={styles.job}>Senior Data Scientist & Business Consultant</p>
    <Flex align="center" justify="center" gap={5} className="mt-16">
      <Button type="primary">Send Email</Button>
      <Button>Download CV</Button>
    </Flex>
  </div>
);
