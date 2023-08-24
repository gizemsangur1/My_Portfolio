import { Grid, Typography } from '@mui/material'
import React from 'react'
import styles from "./OldVersion.module.css"
const OldVersion = () => {
  return (
    <Grid container className={styles.container} spacing={3}>
        <Grid item xs={12} sx={{textAlign:"center"}}>
            <Typography sx={{fontSize:"36px"}}>Versions</Typography>
        </Grid>
        <Grid item xs={4}><img src="/portver1.jpeg" className={styles.img}/></Grid>
        <Grid item xs={4}><img src="/portfolio.jpeg" className={styles.img}/></Grid>
        <Grid item xs={4}></Grid>
        
    </Grid>
  )
}

export default OldVersion