"use client";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, {  useState } from "react";
import styles from "./Navbar.module.css";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  const title = "<GizemSangur/>";
  const [clickedItem, setClickedItem] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);
  const navlinks = [
    {
      id: 1,
      title: "About Me",
      click: "<AboutMe/>",
      url: "aboutme",
    },
    {
      id: 2,
      title: "Projects",
      click: "<Projects/>",
      url: "projects",
    },
    {
      id: 3,
      title: "Skills",
      click: "<Skills/>",
      url: "skills",
    },
  ];
  const handleClick = (item) => {
    setClickedItem(true);
    setClickedItemId(item.id);
  };

  return (
    <Grid container direction="row">
      <Grid item md={3} sm={12} xs={12} className={styles.title}>
        <Typography sx={{ fontSize: "24px" }}>{title}</Typography>
      </Grid>
      <Grid item md={9} sm={12} xs={12}>
        <Grid container sx={{ height: "100%" }}>
          {navlinks.map((item) => (
            <Grid item xs={4} className={styles.nav} key={item.id}>
             <ScrollLink
                to={item.url} 
                smooth={true}
                offset={-70} 
                className={styles.link}
                onClick={() => handleClick(item)}
              >
                {clickedItem && clickedItemId === item.id
                  ? item.click
                  : item.title}
              </ScrollLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
