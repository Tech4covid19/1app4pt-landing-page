import React from "react"
import Typography from "@/components/typography"

import styles from "./index.module.css"

const Hero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h1" color="white" weight="semiBold">
            Unindo esforços para combater digitalmente o COVID-19
          </Typography>
        </div>
        <div className={styles.body}>
          <Typography variant="largeBody" color="white">
            O grupo de trabalho 1App4PT reune{" "}
            <strong>membros de vários projectos</strong> que se dedicaram ao
            desenvolvimento de{" "}
            <strong>Apps para combater a pandemia Covid-19</strong>, bem como
            voluntários de outros quadrantes da sociedade portuguesa,
            interessados em contribuir.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Hero
