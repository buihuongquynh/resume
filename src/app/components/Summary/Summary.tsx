import React from "react";
import { Avatar, Button, Flex } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import styles from "./Summary.module.css";

export const Summary = () => (
  <div className={styles.summary}>
    <p className={styles.available}>
      <span className={styles.status} />
      Available for Work
    </p>
    <div className={styles.name}>Huong Quynh</div>
    <p className={styles.job}>Senior Data Scientist & Business Consultant</p>
    <Flex align="center" justify="center" gap={5} className="mt-16">
      <Button type="primary">Send Email</Button>
      <Button>Download CV</Button>
    </Flex>
  </div>
);
