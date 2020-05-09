import React, { useState, useEffect } from "react"
import classNames from "classnames"
import Link from "gatsby-link"
import Button from "@/components/button"
import Typography from "@/components/typography"
import Sticky from "@/components/sticky"

import styles from "./index.module.css"

const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [])

  return scrollY
}

export default function Header() {
  const scrollY = useWindowScroll()
  const isSticky = scrollY >= 10
  const className = classNames(styles.root, {
    [styles.sticky]: isSticky,
  })

  return (
    <Sticky>
      <header className={className}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Link to="/" className={styles.logo}>
              <span>
                1<strong>APP</strong>4<strong>PT</strong>
              </span>
            </Link>
          </div>
          <div className={styles.right}>
            <div>
              <Link to="/#documentacao" className={styles.link}>
                <Typography variant="title">Documentação</Typography>
              </Link>
              <Link to="/#membros" className={styles.link}>
                <Typography variant="title">Membros</Typography>
              </Link>
            </div>
            <Link to="/#aderir">
              <Button color="green" className={styles.join}>
                <Typography variant="title" weight="semiBold" color="white">
                  Aderir
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </Sticky>
  )
}
