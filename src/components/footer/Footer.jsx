"use client";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import styles from "./Footer.module.css";
import OldVersion from "../oldversion/OldVersion";
const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleImg = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <Grid
        container
        sx={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "96px",
          position: "relative",
        }}
      >
        {show && (
          /*  <Grid
              sx={{
                borderRadius: 1,
                border: 1,
                backgroundColor: "#c6ffc8",
                position: "absolute",
                top: 40,
                left: 50,
                width: "90%",
                height: "90vh",
              }}
            > */
          <OldVersion />
          /* </Grid> */
        )}
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <a
            href="https://www.linkedin.com/in/gizem-sangur/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={36} />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a
            href="https://github.com/gizemsangur1"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={36} />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a
            href="mailto:gizem2002sangur@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <CgMail size={36} />
          </a>
        </Grid>
        <Grid item xs={2} sx={{ justifyContent: "center", display: "grid" }}>
          <BsFillArrowUpCircleFill size={36} onClick={handleClick} />
        </Grid>
        <Grid item xs={1} />
        <img src="/tardis3.png" className={styles.img} onClick={handleImg} />
      </Grid>
    </div>
  );
};

export default Footer;
