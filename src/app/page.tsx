import React from "react";
import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Profile } from "./components/Profile";

const Home = () => (
  <>
    <div className={styles.container}>
      <Header />
      <Summary />
      <Profile />
    </div>
  </>
);

export default Home;
