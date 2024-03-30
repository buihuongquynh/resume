import React from "react";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Profile } from "./components/Profile";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

const Home = () => (
  <>
    <div className={styles.container}>
      <Header />
      <Summary />
      <Profile />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  </>
);

export default Home;
