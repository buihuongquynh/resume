import React from "react";
import { Timeline } from "antd";
import styles from "./WorkExperience.module.css";
import { WorkTime } from "./WorkTime";
import { Title } from "../Title";
import workIcon from "./assets/work.svg";

export const WorkExperience = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title iconUrl={workIcon.src} title="Kinh nghiệm làm việc" />

      <Timeline
        className={styles.timeline}
        items={[
          {
            children: (
              <WorkTime
                title="Sun* Inc full stack web developer"
                key="Full-Time"
                location="Remote"
                description=" <ul>
                <li>Tạo Spec dự án và thiết kế giao diện người dùng</li>
                <li>Triển khai thiết database và API</li>
                <li>Sử dụng Next.js để hiển thị phía máy chủ</li>
                <li>Đảm bảo phát triển an toàn bằng các công cụ CI</li>
                <li>Tiến hành kiểm tra bằng Cypress</li>
              </ul>"
                time="7/2021- 2/2022"
              />
            ),
          },
          {
            children: (
              <WorkTime
                title=" Hirogo full stack developer"
                key="
        Part-Time"
                location="Đà Nẵng, Việt Name"
                description=" <ul>
                <li>Phát triển trang web bằng WordPress</li>
                <li>Phát triển trang web bằng PHP</li>
                <li>Phát triển trang web bằng Vue.js</li>
                <li>Tạo giao diện người dùng bằng html css js thuần túy</li>
              </ul>"
                time="3/2022- 8/2022"
              />
            ),
          },
          {
            children: (
              <WorkTime
                title="Corize Inc front end developer"
                key="TechNova
        Full-Time"
                location="Đà Nẵng, Việt Nam"
                description="<ul>
                <li>Tạo thông số kỹ thuật của dự án và thiết kế giao diện người dùng</li>
                <li>Triển khai thiết kế cơ sở dữ liệu và API</li>
                <li>Sử dụng Next.js để hiển thị phía máy chủ</li>
                <li>Đảm bảo phát triển an toàn bằng các công cụ CI</li>
                <li>Tiến hành kiểm tra bằng Cypress.</li>
              </ul>"
                time="9/2022- Hiện tại
                "
              />
            ),
          },
        ]}
      />
    </div>
  </div>
);
