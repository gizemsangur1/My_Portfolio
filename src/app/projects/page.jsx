import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
import Projectcards from "@/components/projectcards/Projectcards";
const Projects = () => {
  return (
    <Grid container className={styles.main} sx={{paddingLeft:{md:"6rem",sm:"1rem",xs:"1rem"},paddingRight:{md:"6rem",sm:"1rem",xs:"1rem"}}} id="projects">
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography className={styles.title}>PROJECTS</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: "24px" }}>
        <Grid item md={6}  sm={12} xs={12}>
          <Projectcards
            src="/toyota.jpeg"
            title="Toyota"
            desc="This frontend project currently being used in Toyota manufacturing facility for listing and registering cars and their defects."
            live="https://toyota-orcin.vercel.app/" github="https://github.com/gizemsangur1/Toyota-Project/blob/master/README.md"
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Projectcards src="/aboutus.jpeg" title="Tomorrow." desc="Responsive web site made with Next.js for design teams.Contact page connected to MongoDB." live="https://tomorrow-seven.vercel.app/" github="https://github.com/gizemsangur1/Tomorrow./blob/main/README.md"/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Projectcards src="/redeal.jpeg" title="ReDeal Analyzer" desc="Responsive website created with Next.js for real estate agencies."/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Projectcards src="/portfolio.jpeg" title="Portfolio" desc="My personal portfolio website that you are currently viewing.Made with Next.js." live="https://toyota-orcin.vercel.app/" github="https://github.com/gizemsangur1/Toyota-Project/blob/master/README.md"/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
