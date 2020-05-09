import React from "react"
import Typography from "@/components/typography"
import members from "@/data/membros.json"

import styles from "./index.module.css"

const Members = () => {
  return (
    <div id="membros" className={styles.root}>
      <div className={styles.container}>
        <Typography variant="h1" color="text" weight="semiBold">
          Membros
        </Typography>
        <div className={styles.members}>
          {members.map((member, idx) => (
            <div key={idx} className={styles.member}>
              <a href={member.url} target="_blank" rel="noopener noreferrer">
                <img src={member.img_url} alt={member.name} />
              </a>
            </div>
          ))}
        </div>
        <div className={styles.info}>
          <Typography variant="body" color="text">
            Tens uma App Covid-19 e interesse em participar neste grupo de
            trabalho?{" "}
            <a className={styles.infoLink} href="/#aderir">
              Contacta-nos
            </a>{" "}
            para discutir futuras colaborações.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Members
