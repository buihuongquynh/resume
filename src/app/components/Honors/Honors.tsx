import React from "react";
import styles from "./Honors.module.css";
import { Title } from "../Title";
import cupIcon from "./assets/cup.svg";
import { Honor } from "./Honor";
import { Col, Row } from "antd";

export const Honors = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title
        iconUrl={cupIcon.src}
        title="Honors & Awards"
        description="Acknowledgments for exceptional achievements and contributions in professional endeavors."
      />
      <Row>
        <Col span={12}>
          <Honor
            title="Data Science Excellence Award"
            issued="Issued by Nexus Data Science"
            description="Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights."
            date="Dec 2023"
          />
        </Col>
        <Col span={12}>
          <Honor
            title="Data Science Excellence Award"
            issued="Issued by Nexus Data Science"
            description="Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights."
            date="Dec 2023"
          />
        </Col>
      </Row>
    </div>
  </div>
);
