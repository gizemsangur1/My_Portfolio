import { Button } from '@mui/material'
import React from 'react'
import styles from "./Button.module.css"
const CButton = (props) => {
  return (
    <Button className={styles.button} href={props.link}>{props.name}</Button>
  )
}

export default CButton