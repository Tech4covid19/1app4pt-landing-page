import React from "react"
import heart from "@/assets/heart.svg"
import tech4covid19 from "@/assets/tech4covid19-logo.svg"
import Typography from "@/components/typography"

import styles from "./index.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.email}>
        <a href="mailto:info@1app4pt.pt">
          <Typography variant="footer" color="white">
            info@1app4pt.pt
          </Typography>
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.heartWrapper}>
          <Typography variant="footer" color="gray">
            Made with
          </Typography>
          <img className={styles.heart} src={heart} alt="Heart" />
          <Typography variant="footer" color="gray">
            in Portugal
          </Typography>
        </div>
        <div className={styles.tech4covid19Wrapper}>
          <Typography variant="footer" color="gray">
            Born in the
          </Typography>
          <a
            href="https://tech4covid19.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <img
              className={styles.tech4covid19}
              src={tech4covid19}
              alt="tech4covid19"
            />
          </a>
          <Typography variant="footer" color="gray">
            community
          </Typography>
        </div>
      </div>
    </div>
  )
}
