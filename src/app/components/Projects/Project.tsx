import React from "react";
import styles from "./Project.module.css";
import { Title } from "../Title";
import projectImg from "./assets/project.svg";
import { Button } from "antd";
import arrowIcon from "./assets/arrow.svg";

export const Project = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title iconUrl={projectImg.src} title="Dự án" />
      <div className={styles.content}>
        <b className={styles.title}>Fish house</b>
        <div>Vai trò: Frontend Developer</div>
        <div>Công nghệ: Html, css, javaScrip, jquery</div>
        <div>
          <Button
            href="https://buihuongquynh.github.io/FishFouse/"
            target="blank"
            type="primary"
            icon={<img src={arrowIcon.src} />}
          >
            Xem dự án
          </Button>
        </div>
        <a href="https://github.com/buihuongquynh/FishFouse">
          Code: https://github.com/buihuongquynh/FishFouse
        </a>
      </div>

      <div className={styles.content}>
        <b className={styles.title}>Selling watches project</b>
        <div>Vai trò: Frontend Developer, Back end developer</div>
        <div>Công nghệ: NextJs, laravel, mysql</div>
        <div>
          <Button
            href="https://buihuongquynh.github.io/ProjectClock/
            "
            target="blank"
            type="primary"
            icon={<img src={arrowIcon.src} />}
          >
            Xem dự án
          </Button>
        </div>
        <a href="https://github.com/buihuongquynh/ClockShop">
          Code: https://github.com/buihuongquynh/ClockShop
        </a>
      </div>

      <div className={styles.content}>
        <b className={styles.title}>Cooking guide app</b>
        <div>Vai trò: Frontend Developer</div>
        <div>Công nghệ: ReactNative</div>

        <a href="https://github.com/buihuongquynh/CookingRecipe">
          Code: https://github.com/buihuongquynh/CookingRecipe
        </a>
      </div>
    </div>
  </div>
);
