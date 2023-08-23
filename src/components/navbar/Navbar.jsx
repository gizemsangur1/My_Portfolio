"use client";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiFillLinkedin } from 'react-icons/ai';
import {AiFillGithub} from "react-icons/ai"
const Navbar = () => {
  const title = "<GizemSangur/>";
  const [clickedItem, setClickedItem] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);
  const navlinks = [
    {
      id: 1,
      title: "About Me",
      click: "<AboutMe/>",
      url: "/aboutme",
    },
    {
      id: 2,
      title: "Projects",
      click: "<Projects/>",
      url: "/projects",
    },
    {
      id: 3,
      title: "Skills",
      click: "<Skills/>",
      url: "/skills",
    },
    {
      id: 4,
      title: "Contact",
      click: "<Contact/>",
      url: "/contact",
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
      <Grid md={6} sm={9} xs={9}>
        <Grid container sx={{height:"100%"}} >
          {navlinks.map((item) => (
            <Grid item xs={3}  className={styles.nav} key={item.id}>
              <Link
                href={item.url}
                className={styles.link}
                onClick={() => handleClick(item)}
              >
                {clickedItem && clickedItemId === item.id
                  ? item.click
                  : item.title}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid md={3} sm={3} xs={3}>
        <Grid container sx={{height:"100%",justifyContent:"start",alignItems:"center"}} >
          <Grid item xs={2}><AiFillLinkedin size={24}/></Grid>
          <Grid item xs={2}><AiFillGithub size={24}/></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
