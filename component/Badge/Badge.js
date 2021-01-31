import React from 'react'
import styles from "./Badge.module.css"
import { Box } from "@chakra-ui/react"

const Badge = () => {
    return (
        <Box zIndex="5" className={styles.badge}>Beta</Box>
    )
}

export default Badge
