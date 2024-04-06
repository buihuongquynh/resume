import React from "react";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Profile } from "./components/Profile";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Honors } from "./components/Honors";
import { Project } from "./components/Projects";

const Home = () => (
  <>
    <div className={styles.container}>
      <Header />
      <Summary />
      <Profile />
      <WorkExperience />
      <Project />
      <Education />
      <Skills />
      <Languages />
      {/* <Honors /> */}
    </div>
  </>
);

export default Home;
