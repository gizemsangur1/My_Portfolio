import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'
import CButton from '../button/CButton'
import styles from "./Projectcards.module.css"
const Projectcards = (props) => {
  return (
    <Grid container  className={styles.container} >
        <Grid container direction="row" sx={{justifyContent:"center",margin:"12px"}}>
            <img src={props.src} className={styles.img}/>
        </Grid>
        <Grid container direction="row"  sx={{margin:"12px"}}>
            <Typography className={styles.title}>{props.title}</Typography>
            <Typography className={styles.desc}>{props.desc}</Typography>
        </Grid>
        <Grid container direction="row" sx={{justifyContent:"center",margin:"12px"}}>
            <CButton name="Live Preview" link={props.live} />
            <CButton name="Check on Github" link={props.github}/>
        </Grid>
    </Grid>
  )
}

export default Projectcards