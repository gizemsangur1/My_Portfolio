import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";
const Skills = () => {
  const skills = [
    { id: 1, name: "React.js" },
    { id: 2, name: "Next.js" },
    { id: 3, name: "CSS,Bootstrap" },
    { id: 4, name: "HTML" },
    { id: 5, name: "Javascript" },
    { id: 6, name: "C++" },
    { id: 7, name: "Git" },
    { id: 8, name: "C1 English" },
  ];
  return (
    <Grid container className={styles.main}  sx={{paddingLeft:{md:"6rem",sm:"1rem",xs:"1rem"},paddingRight:{md:"6rem",sm:"1rem",xs:"1rem"}}} id="skills">
      <Grid container direction="row">
        <Typography className={styles.title}>Skills and Technologies</Typography>
      </Grid>
      <Grid container direction="row" spacing={3} sx={{ marginTop: "24px" }}>
        {skills.map((item) => (
          <Grid item md={3} sm={6} xs={6} key={item.id} className={styles.skills}>
            <li className={styles.list}>{item.name}</li>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
