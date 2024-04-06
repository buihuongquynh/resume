import React from "react";
import { Timeline } from "antd";
import styles from "./WorkExperience.module.css";
import { WorkTime } from "./WorkTime";
import { Title } from "../Title";
import workIcon from "./assets/work.svg";

export const WorkExperience = () => (
  <div className={`box ${styles.wrapper}`}>
    <div className={styles.container}>
      <Title iconUrl={workIcon.src} title="Work Experience" />

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
                <li>Create project specs and UI designs</li>
                <li>Implement database design and APIs</li>
                <li>Utilize Next.js for server-side rendering</li>
                <li>Ensure secure development with CI tools</li>
                <li>Conduct tests using Cypress.</li>
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
                location="Da Nang, Viet Nam"
                description=" <ul>
                <li>Developing websites using WordPress</li>
                <li>Developing websites using PHP</li>
                <li>Developing websites using Vue.js</li>
                <li>Make UI with pure html css js</li>
              </ul>"
                time="3/2022- 8/2022"
              />
            ),
          },
          {
            children: (
              <WorkTime
                title="Corize Inc font end developer"
                key="TechNova
        Full-Time"
                location="Da Nang, Viet Nam"
                description="<ul>
                <li>Create project specs and UI designs</li>
                <li>Implement database design and APIs</li>
                <li>Utilize Next.js for server-side rendering</li>
                <li>Ensure secure development with CI tools</li>
                <li>Conduct tests using Cypress.</li>
              </ul>"
                time="9/2022- Present
                "
              />
            ),
          },
        ]}
      />
    </div>
  </div>
);
