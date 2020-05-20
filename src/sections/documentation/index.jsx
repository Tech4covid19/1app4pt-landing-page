import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Typography from "@/components/typography"
import Button from "@/components/button"
import documents from "@/data/documentos.json"

import styles from "./index.module.css"

const downloadFile = async fileUrl => {
  const file = fileUrl.split("/").pop()
  const filename = file.split("?")[0]
  const blob = await fetch(fileUrl).then(r => r.blob())
  if ("msSaveOrOpenBlob" in window.navigator) {
    // Blob for IE11
    window.navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    // Blob navigator
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", filename)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }
}

const query = graphql`
  query {
    file(relativePath: { eq: "iphone.png" }) {
      childImageSharp {
        fluid(maxWidth: 446, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Documentation = () => {
  const data = useStaticQuery(query)
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className={styles.imageWrapper}
          alt="iPhone"
        />
      </div>
      <div id="documentacao" className={styles.right}>
        <div className={styles.title}>
          <Typography variant="h2" color="text" weight="semiBold">
            Documentação
          </Typography>
        </div>
        <div className={styles.subTitle}>
          <Typography variant="h3" color="text" weight="semiBold">
            Princípios para uma aplicação nacional de rastreamento de contactos
            (ou Contact Tracing)
          </Typography>
        </div>
        <div className={styles.body}>
          <Typography variant="mediumBody" color="text">
            O objetivo deste documento é oferecer uma descrição simples do
            rastreamento de contactos bem como clarificar questões do seu
            potencial impacto na privacidade. Adicionalmente, são explorados
            aspectos relacionados com a sua eficácia, assim como aspectos de
            inclusão e literacia digital. Por fim, são elencados os princípios
            orientadores para o desenvolvimento de uma aplicação de rastreamento
            de contactos nacional
          </Typography>
        </div>
        <div className={styles.footer}>
          <Button
            className={styles.download}
            onClick={() => downloadFile(documents[0].url)}
          >
            Download documento
          </Button>
          <span className={styles.divider} />
          <div className={styles.footerUpdate}>
            <Typography variant="smallBody">Ultima actualização</Typography>
            <Typography variant="smallBody" color="blue">
              {documents[0].last_updated}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation
