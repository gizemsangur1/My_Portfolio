"use client"
import { Button } from '@mui/material'
import React from 'react'
import styles from "./Button.module.css"
const CButton = (props) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; 
    link.download = 'cv.pdf'; 
    console.log("clicled")
    link.click();
  };
  return (
    <Button className={styles.button} href={props.link} sx={{padding:{lg:"25px 51px 26px 51px",md: "15px 21px 16px 21px",sm: "15px 21px 16px 21px"}}} onClick={handleDownload} >{props.name}</Button>
  )
}

export default CButton