require("./src/styles/reset.css")

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer")
  }

  if (typeof window.requestAnimationFrame === "undefined") {
    await import("raf/polyfill")
  }

  await import("@babel/polyfill")
}
