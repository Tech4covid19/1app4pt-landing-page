import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./index.module.css"

function Button({ children, color, type, className: customClass, ...props }) {
  const className = classNames(styles.root, styles[color], customClass)
  return (
    <button className={className} type={type} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["blue", "green"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
}

Button.defaultProps = {
  color: "blue",
  type: "button",
  className: "",
}

export default Button
