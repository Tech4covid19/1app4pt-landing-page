import React from "react"
import Typography from "@/components/typography"
import people from "@/data/participantes.json"

import styles from "./index.module.css"

const Participants = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h1" color="text" weight="semiBold">
            Participantes
          </Typography>
        </div>
        <div className={styles.people}>
          {people.map((person, idx) => (
            <div className={styles.person} key={idx}>
              <a
                href={person.linkedin}
                rel="noreferrer noopener"
                target="_blank"
              >
                <img src={person.img_url} alt={person.name} />
                <Typography variant="title" weight="semiBold">
                  {person.name}
                </Typography>
                <Typography variant="smallBody">{person.company}</Typography>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Participants
