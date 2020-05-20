import React, { useState, createRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import axios from "axios"
import Modal from "react-modal"
import Typography from "@/components/typography"
import Button from "@/components/button"
import checked from "@/assets/checked.svg"
import unchecked from "@/assets/unchecked.svg"
import close from "@/assets/close.svg"

import styles from "./index.module.css"

const query = graphql`
  query {
    site {
      siteMetadata {
        enrollmentUrl
      }
    }
  }
`

const Join = () => {
  const { site } = useStaticQuery(query)
  const { register, handleSubmit, watch, errors, reset } = useForm()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalBody, setModalBody] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const modalRef = createRef()
  const openModal = () => {
    setModalIsOpen(true)
    disableBodyScroll(modalRef.current)
  }
  const closeModal = () => {
    enableBodyScroll(modalRef.current)
    setModalIsOpen(false)
  }
  useEffect(() => {
    if (!modalIsOpen) {
      clearAllBodyScrollLocks()
    }
  }, [modalIsOpen])
  const onSubmit = async data => {
    try {
      setIsSubmitting(true)
      await axios.post(site.siteMetadata.enrollmentUrl, data)
      setModalTitle("Obrigado pelo seu pedido de participação.")
      setModalBody("Entraremos em contacto brevemente")
      reset()
    } catch (error) {
      setModalTitle("Ocorreu um erro. Por favor tente novamente.")
      setModalBody(
        `Se persistir envie email para <a href="mailto:info@1app4.pt">info@1app4.pt</a>`
      )
    } finally {
      openModal()
      setIsSubmitting(false)
    }
  }
  return (
    <div id="aderir" className={styles.root}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Typography variant="h1" color="text" weight="semiBold">
            Participe
          </Typography>
          <Typography variant="body" color="text">
            Pode participar como instituição ou a título individual
          </Typography>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className={styles.formRow}>
            <div className={styles.name}>
              <input
                ref={register({ required: true, maxLength: 255 })}
                type="text"
                name="name"
                placeholder="Nome"
                maxLength="255"
                disabled={isSubmitting}
              />
              {errors.name && (
                <Typography variant="smallBody" color="red">
                  Nome é obrigatório.
                </Typography>
              )}
            </div>
            <div className={styles.email}>
              <input
                ref={register({ required: true, maxLength: 255 })}
                type="email"
                name="email"
                placeholder="Email"
                maxLength="255"
                disabled={isSubmitting}
              />
              {errors.email && (
                <Typography variant="smallBody" color="red">
                  Email é obrigatório.
                </Typography>
              )}
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.affiliation}>
              <input
                ref={register({ maxLength: 255 })}
                type="text"
                name="affiliation"
                placeholder="Afiliação"
                maxLength="255"
                disabled={isSubmitting}
              />
              {errors.affiliation && (
                <Typography variant="smallBody" color="red">
                  Afiliação é obrigatória.
                </Typography>
              )}
            </div>
          </div>
          <div className={styles.formRow}>
            <label htmlFor="newsletter" className={styles.newsletter}>
              <input
                ref={register}
                type="checkbox"
                name="newsletter"
                id="newsletter"
                disabled={isSubmitting}
              />
              <img
                className={styles.image}
                src={watch("newsletter") ? checked : unchecked}
                alt="Heart"
              />
              <span>registar na newsletter</span>
            </label>
            <Button
              type="submit"
              className={styles.submit}
              disabled={isSubmitting}
            >
              Participe
            </Button>
          </div>
        </form>
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName={styles.overlay}
        className={styles.content}
        closeTimeoutMS={200}
        contentLabel="Example Modal"
      >
        <div ref={modalRef} className={styles.modalContainer}>
          <button className={styles.close} onClick={closeModal}>
            <img src={close} alt="close" />
          </button>
          <div className={styles.modalBody}>
            <Typography variant="h3" weight="semiBold">
              {modalTitle}
            </Typography>
            <Typography>
              <span dangerouslySetInnerHTML={{ __html: modalBody }} />
            </Typography>
            <Button className={styles.closeButton} onClick={closeModal}>
              <Typography variant="title" weight="bold">
                Fechar
              </Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Join
