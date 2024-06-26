import React from "react";
import styles from "./Profile.module.css";
import { Col, Row, Image, Flex } from "antd";
import avatar from "./assets/avatar.webp";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Title } from "../Title";
import profileIcon from "./assets/profile.svg";
import sunImg from "./assets/work/sun.png";
import hirogoImg from "./assets/work/hirogo.svg";
import corizeImg from "./assets/work/corize.png";
import Link from "next/link";

export const Profile = () => (
  <div className={styles.profile}>
    <div className={`mb-10 ${styles.flex}`}>
      {/* <div>
        <Image
          preview={false}
          alt="avatar"
          src={avatar.src}
          width={265}
          height={379}
          className={styles.avatar}
        />
      </div> */}
      <div className={`box ${styles.wrapper}`}>
        <Title
          iconUrl={profileIcon.src}
          title="Professional Profile"
          description="Tôi có hơn 2 năm kinh nghiệm với ReactJS và hơn 2 năm làm việc trong lĩnh vực phát triển front-end.
           Thành thạo các Framework JavaScript khác nhau cho front-end, back-end và di động.
          "
        />
        <Flex className={styles.location} align="center" gap={5}>
          <EnvironmentOutlined />
          <div>Đà Nẵng, Việt Nam</div>
        </Flex>
      </div>
    </div>
    <div className={styles.worker}>
      <div className="box">
        <div className={styles.header}>Làm việc với</div>
        <Flex className={styles.workers} align="center" justify="space-between">
          <Link href="https://sun-asterisk.vn/">
            <img className={styles.workerImage} src={sunImg.src} />
          </Link>
          <Link href="https://hirogo.net/">
            <img className={styles.workerImage} src={hirogoImg.src} />
          </Link>
          <Link href="https://corize.co.jp/">
            <img className={styles.workerImage} src={corizeImg.src} />
          </Link>
        </Flex>
      </div>
    </div>
  </div>
);
