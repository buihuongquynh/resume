import React from "react";
import { Timeline } from "antd";
import styles from "./WorkExperience.module.css";
import { WorkTime } from "./WorkTime";
import { Title } from "../Title";
import workIcon from "./assets/work.svg";

export const WorkExperience = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title
        iconUrl={workIcon.src}
        title="Work Experience"
        description="Proven track record in data science and business consulting,
        delivering impactful insights and results across industries."
      />
      <Timeline
        className={styles.timeline}
        items={[
          {
            children: (
              <WorkTime
                title="Data Scientist & Business Consultant"
                key="TechNova
            Full-Time"
                location="Phoenix, Arizona, USA"
                description="Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making."
                time="Jun 2021 - Present"
              />
            ),
          },
          {
            children: (
              <WorkTime
                title="Data Scientist & Business Consultant"
                key="TechNova
        Full-Time"
                location="Phoenix, Arizona, USA"
                description="Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making."
                time="Jun 2021 - Present"
              />
            ),
          },
          {
            children: (
              <WorkTime
                title="Data Scientist & Business Consultant"
                key="TechNova
        Full-Time"
                location="Phoenix, Arizona, USA"
                description="Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making."
                time="Jun 2021 - Present"
              />
            ),
          },
          {
            children: (
              <WorkTime
                title="Data Scientist & Business Consultant"
                key="TechNova
        Full-Time"
                location="Phoenix, Arizona, USA"
                description="Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving transformative initiatives and delivering strategic insights to optimize organizational performance and facilitate informed decision-making."
                time="Jun 2021 - Present"
              />
            ),
          },
        ]}
      />
    </div>
  </div>
);
