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
    <Grid container className={styles.main}>
      <Grid container direction="row">
        <Typography className={styles.title}>Skills</Typography>
      </Grid>
      <Grid container direction="row" spacing={3} sx={{ marginTop: "24px" }}>
        {skills.map((item) => (
          <Grid item xs={4} key={item.id} className={styles.skills}>
            <ul>{item.name}</ul>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
