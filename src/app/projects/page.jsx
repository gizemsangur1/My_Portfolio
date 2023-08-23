import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import Projectcards from "@/components/projectcards/Projectcards";
const Projects = () => {
  return (
    <Grid container className={styles.main}>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography className={styles.title}>PROJECTS</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: "24px" }}>
        <Grid item xs={6}>
          <Projectcards
            src="/toyota.jpeg"
            title="Toyota"
            desc="Currently being used in Toyota manufacturing facility, the front-end project employs various technologies such as React.js, Redux, Axios, i18next, and more."
            live="https://toyota-orcin.vercel.app/" github="https://github.com/gizemsangur1/Toyota-Project/blob/master/README.md"
          />
        </Grid>
        <Grid item xs={6}>
          <Projectcards src="/aboutus.jpeg" title="Tomorrow." live="https://tomorrow-seven.vercel.app/" github="https://github.com/gizemsangur1/Tomorrow./blob/main/README.md"/>
        </Grid>
        <Grid item xs={6}>
          <Projectcards src="/redeal.jpeg" title="ReDeal Analyzer" />
        </Grid>
        <Grid item xs={6}>
          <Projectcards src="/aboutus.jpeg" title="Toyota" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
