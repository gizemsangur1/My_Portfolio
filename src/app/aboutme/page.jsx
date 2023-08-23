import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
const AboutMe = () => {
  return (
    <Grid container className={styles.main}>
      <Grid container className={styles.container}>
        <Grid item xs={10} className={styles.about}>
          <Typography className={styles.title}>Hi,I'm Gizem Sangur</Typography>
          <Typography className={styles.regulartext}>
            I'm a 3'rd year Computer Engineering student.
          </Typography>
          <Button className={styles.button}>Download CV</Button>
          <div className={styles.ball}></div>
          <div className={styles.ball2}></div>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default AboutMe;
