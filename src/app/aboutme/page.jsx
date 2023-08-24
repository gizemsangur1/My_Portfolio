"use client"
import {  Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import CButton from "@/components/button/CButton";
import Circles from "@/components/circles/Circles";
const AboutMe = () => {
  return (
    <Grid container className={styles.main}>
      <Circles/>
      <Grid container className={styles.container}>
        <Grid item className={styles.about}>
          <Typography className={styles.title}>Hi,I'm Gizem Şangür</Typography>
          <Typography className={styles.regulartext}>
            I'm a 3'rd year Computer Engineering student.
          </Typography>
          <CButton name="Download CV"/>
          <div className={ styles.ball }  ></div>
          <div className={styles.ball2 }></div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
