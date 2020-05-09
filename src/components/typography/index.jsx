import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./index.module.css"

const Typography = ({ children, variant, weight, color }) => {
  const className = classNames(styles[variant], styles[color], styles[weight])

  const TextComponent = ["h1", "h2", "h3"].includes(variant) ? variant : "p"

  return <TextComponent className={className}>{children}</TextComponent>
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "title",
    "body",
    "largeBody",
    "mediumBody",
    "smallBody",
    "footer",
  ]),
  weight: PropTypes.oneOf(["regular", "medium", "semiBold", "bold"]),
  color: PropTypes.oneOf([
    "white",
    "text",
    "black",
    "gray",
    "green",
    "blue",
    "red",
  ]),
}

Typography.defaultProps = {
  variant: "body",
  weight: "regular",
  color: "text",
}

export default Typography
