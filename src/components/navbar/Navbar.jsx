"use client"
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const title = "<Gizem Sangur/>";
  const [clickedItem, setClickedItem] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null); 
  const navlinks = [
    {
      id: 1,
      title: "About Me",
      click: "<About Me/>",
      url: "/",
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
    <Grid container direction="column" sx={{ height: "100vh" }}>
      <Grid item xs={3}>
        <Typography>{title}</Typography>
      </Grid>
      {navlinks.map((item) => (
        <Grid item xs={2} className={styles.nav} key={item.id}>
          <Link
            href={item.url}
            className={styles.link}
            onClick={() => handleClick(item)}
          >
            {clickedItem && clickedItemId === item.id ? item.click : item.title}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Navbar;
